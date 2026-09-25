// Quiz Engine Service for SkillProbe
// Handles Level 1 & Level 2 Deduplication, Randomization, Option Shuffling, Server-Side Scoring, and Quiz Configurations.

const fs = require('fs');
const path = require('path');
const { supabaseFetch, SUPABASE_URL } = require('../lib/supabaseAdmin');
const { generateDomainQuestionsWithGemini, validateSemanticDomainQuestion } = require('./geminiService');
const domainQuestionBank = require('../data/domainQuestionBank');

const CONFIG_FILE = path.join(__dirname, '../data/quizConfig.json');

function loadLocalConfigFile() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const data = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
      return data;
    }
  } catch (e) {
    console.warn('[QuizEngine] Error reading local config file:', e.message);
  }
  return null;
}

function saveLocalConfigFile(config) {
  try {
    const dir = path.dirname(CONFIG_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf8');
  } catch (e) {
    console.warn('[QuizEngine] Error saving local config file:', e.message);
  }
}

// In-memory default config fallback (10 questions, 1 attempt, 15 minutes)
let memoryConfig = {
  question_bank_size: 30,
  questions_per_quiz: 30,
  passing_questions_count: 15,
  quiz_duration_minutes: 15,
  max_attempts: 1,
  passing_percentage: 50,
  gemini_api_key: process.env.GEMINI_API_KEY || '',
  webinar_url: '',
  whatsapp_community_url: 'https://chat.whatsapp.com/E3OZRJip3Gx1y0XXNmKXvo'
};

// Initialize from file if exists
const initialLoaded = loadLocalConfigFile();
if (initialLoaded) {
  memoryConfig = { ...memoryConfig, ...initialLoaded };
}

/**
 * Get Platform Quiz Configuration
 */
async function getQuizConfig() {
  const fileConfig = loadLocalConfigFile();
  if (fileConfig) {
    memoryConfig = { ...memoryConfig, ...fileConfig };
  }
  return { ...memoryConfig };
}

/**
 * Update Platform Quiz Configuration
 */
async function updateQuizConfig(newConfig) {
  memoryConfig = { ...memoryConfig, ...newConfig };
  if (newConfig.gemini_api_key) {
    process.env.GEMINI_API_KEY = newConfig.gemini_api_key;
  }

  // Persist locally for 100% reliable survival across restarts
  saveLocalConfigFile(memoryConfig);
  return { ...memoryConfig };
}

/**
 * Fetch domain bank statistics (total questions, difficulty breakdown)
 */
async function getDomainBankStats() {
  try {
    const [domains, questions] = await Promise.all([
      supabaseFetch('domains?select=id,name,slug,question_count&order=name.asc'),
      supabaseFetch('questions?select=id,domain_id,difficulty,active')
    ]);

    if (!Array.isArray(domains)) return [];

    const statsMap = {};
    (domains || []).forEach(d => {
      statsMap[d.id] = {
        domainId: d.id,
        domainName: d.name,
        domainSlug: d.slug,
        total: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        isReady: false
      };
    });

    if (Array.isArray(questions)) {
      questions.forEach(q => {
        if (statsMap[q.domain_id] && q.active) {
          statsMap[q.domain_id].total += 1;
          const diff = String(q.difficulty).toLowerCase();
          if (diff === 'easy') statsMap[q.domain_id].easy += 1;
          else if (diff === 'medium') statsMap[q.domain_id].medium += 1;
          else if (diff === 'hard') statsMap[q.domain_id].hard += 1;
        }
      });
    }

    const config = await getQuizConfig();
    return Object.values(statsMap).map(s => ({
      ...s,
      isReady: s.total >= config.questions_per_quiz,
      targetBankSize: config.question_bank_size
    }));
  } catch (err) {
    console.error('[QuizEngine] getDomainBankStats error:', err.message);
    return [];
  }
}

/**
 * Generate and store 30 questions for a domain using Gemini API with Level 1 Deduplication
 */
async function generateAndStoreDomainBank(domainId, domainNameOverride = null, apiKeyOverride = null) {
  // 1. Resolve domain
  let domainName = domainNameOverride;
  if (!domainName) {
    const domainData = await supabaseFetch(`domains?id=eq.${domainId}&select=name`);
    if (Array.isArray(domainData) && domainData.length > 0) {
      domainName = domainData[0].name;
    } else {
      domainName = 'Technical Domain';
    }
  }

  // 2. Query existing questions for Level 1 deduplication
  const existingQuestions = await supabaseFetch(`questions?domain_id=eq.${domainId}&select=question_text`);
  const existingTexts = Array.isArray(existingQuestions) ? existingQuestions.map(q => q.question_text) : [];

  console.log(`[QuizEngine] Generating 30 questions for "${domainName}" (current DB count: ${existingTexts.length})...`);

  // 3. Call Gemini
  const config = await getQuizConfig();
  const apiKey = apiKeyOverride || config.gemini_api_key;
  const newQuestions = await generateDomainQuestionsWithGemini(domainName, existingTexts, apiKey);

  if (newQuestions.length === 0) {
    if (existingTexts.length >= 10) {
      console.log(`[QuizEngine] Question bank for "${domainName}" is already populated with ${existingTexts.length} unique questions.`);
      return {
        success: true,
        domainId,
        domainName,
        generated: 0,
        saved: 0,
        totalExisting: existingTexts.length,
        message: 'Question bank is already fully populated.'
      };
    }
    throw new Error(`Failed to generate any new unique questions for domain "${domainName}".`);
  }

  // 4. Save new questions & options to Supabase
  let savedCount = 0;
  for (const q of newQuestions) {
    try {
      // Insert Question with schema compatibility
      const explanationText = q.topic
        ? `[Topic: ${q.topic}] ${q.explanation || ''}`.trim()
        : (q.explanation || null);

      const questionPayload = {
        domain_id: domainId,
        question_text: q.question_text,
        difficulty: q.difficulty,
        marks: 1,
        active: true,
        explanation: explanationText
      };

      const insertedQ = await supabaseFetch('questions', {
        method: 'POST',
        body: [questionPayload]
      });

      if (Array.isArray(insertedQ) && insertedQ.length > 0) {
        const questionId = insertedQ[0].id;

        // Insert Options
        const optionsPayload = q.options.map((opt, idx) => ({
          question_id: questionId,
          option_text: opt.text,
          option_order: idx,
          is_correct: !!opt.is_correct
        }));

        await supabaseFetch('question_options', {
          method: 'POST',
          body: optionsPayload
        });

        savedCount++;
      }
    } catch (insertErr) {
      console.warn(`[QuizEngine] Error inserting question "${q.question_text.substring(0, 30)}...":`, insertErr.message);
    }
  }

  // Update question_count on domain
  try {
    const allQ = await supabaseFetch(`questions?domain_id=eq.${domainId}&active=eq.true&select=id`);
    const totalCount = Array.isArray(allQ) ? allQ.length : savedCount;
    await supabaseFetch(`domains?id=eq.${domainId}`, {
      method: 'PATCH',
      body: { question_count: totalCount, updated_at: new Date().toISOString() }
    });
  } catch {}

  return {
    success: true,
    domainId,
    domainName,
    generated: newQuestions.length,
    saved: savedCount,
    totalExisting: existingTexts.length + savedCount
  };
}

function isValidUuid(id) {
  return typeof id === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
}

function cleanQuestionText(text) {
  if (!text) return '';
  return text
    .replace(/^\[[^\]]+\]\s*/g, '')
    .replace(/^(Fundamental|Practical|Advanced|Technical)\s+question\s+\d+:\s*/i, '')
    .trim();
}

// Canonical domain names map
const CANONICAL_DOMAIN_NAMES = {
  'python-programming': 'Python Programming',
  'python': 'Python Programming',
  'full-stack-web-development': 'Full Stack Web Development',
  'web-development': 'Full Stack Web Development',
  'web-dev': 'Full Stack Web Development',
  'react': 'Frontend Development (React)',
  'javascript': 'JavaScript Development',
  'data-science-machine-learning': 'Data Science & Machine Learning',
  'ai-ml': 'AI & Machine Learning',
  'ai': 'Artificial Intelligence',
  'ml': 'Machine Learning',
  'data-science': 'Data Science',
  'java-backend-architecture': 'Java Backend Architecture',
  'java': 'Java Backend Architecture',
  'cloud-devops': 'Cloud Computing & DevOps',
  'cloud': 'Cloud Computing',
  'devops': 'DevOps Engineering',
  'cybersecurity-ethical-hacking': 'Cybersecurity & Ethical Hacking',
  'cybersecurity': 'Cybersecurity',
  'cyber-security': 'Cybersecurity',
  'security': 'Cybersecurity',
  'ui-ux-design': 'UI/UX Design',
  'ui-ux': 'UI/UX Design',
  'prompt-engineering': 'Generative AI & Prompt Engineering',
  'prompt': 'Generative AI & Prompt Engineering',
  'generative-ai': 'Generative AI',
  'biotechnology': 'Biotechnology',
  'biotech': 'Biotechnology',
  'dsa': 'Data Structures & Algorithms',
  'cpp': 'C++ Programming',
  'c': 'C Programming',
  'business-management': 'Business Management',
  'chemical-engineering': 'Chemical Engineering',
  'chemical': 'Chemical Engineering',
  'chem-eng': 'Chemical Engineering',
  'chemical-eng': 'Chemical Engineering',
  'civil-engineering': 'Civil Engineering',
  'civil-eng': 'Civil Engineering',
  'electrical-engineering': 'Electrical Engineering',
  'eee-eng': 'Electrical Engineering',
  'mechanical-engineering': 'Mechanical Engineering',
  'mech-eng': 'Mechanical Engineering',
  'core-engineering': 'Mechanical Engineering',
  'architectural-engineering': 'Architectural Engineering',
  'aerospace-engineering': 'Aerospace Engineering',
  'aerospace-automobile': 'Aerospace & Automobile Engineering',
  'biomedical-engineering': 'Biomedical Engineering',
  'environmental-engineering': 'Environmental Engineering',
  'computer-science': 'Computer Science',
  'digital-marketing': 'Digital Marketing',
  'finance-accounting': 'Finance & Accounting',
  'robotics': 'Robotics',
  'docker': 'Docker & Kubernetes',
  'golang': 'Go (Golang)',
  'fashion-designing': 'Fashion Designing',
  'iot': 'Internet of Things (IoT)',
  'iot-embedded': 'Internet of Things (IoT)',
  'internet-of-things': 'Internet of Things (IoT)',
  'embedded-systems': 'Embedded Systems'
};

/**
 * Start a Quiz Attempt:
 * - Direct Gemini AI generation for effectiveDomain
 * - Randomizes questions and shuffles options per question
 * - CRITICAL SECURITY: Strips `is_correct` before returning to client
 */
async function startQuizAttempt(studentId, domainId, requestedTargetCount, domainNameOverride = null) {
  const config = await getQuizConfig();
  const maxAttempts = config.max_attempts || 1;

  // UUID validation: ensure studentId is valid hex UUID for DB
  const validStudentId = isValidUuid(studentId) ? studentId : '9bf23b8a-9669-4070-9871-1fdf9f84ca15';

  // Canonical domain IDs mapping (Supabase seeded domain UUIDs)
  const CANONICAL_DOMAIN_MAP = {
    'python-programming': 'd0000000-0000-0000-0000-000000000001',
    'python': 'd0000000-0000-0000-0000-000000000001',
    'full-stack-web-development': 'd0000000-0000-0000-0000-000000000002',
    'web-development': 'd0000000-0000-0000-0000-000000000002',
    'web-dev': 'd0000000-0000-0000-0000-000000000002',
    'react': 'd0000000-0000-0000-0000-000000000002',
    'javascript': 'd0000000-0000-0000-0000-000000000002',
    'data-science-machine-learning': 'd0000000-0000-0000-0000-000000000003',
    'ai-ml': 'd0000000-0000-0000-0000-000000000003',
    'ai': 'd0000000-0000-0000-0000-000000000003',
    'ml': 'd0000000-0000-0000-0000-000000000003',
    'data-science': 'd0000000-0000-0000-0000-000000000003',
    'java-backend-architecture': 'd0000000-0000-0000-0000-000000000004',
    'java': 'd0000000-0000-0000-0000-000000000004',
    'cloud-devops': 'd0000000-0000-0000-0000-000000000005',
    'cloud': 'd0000000-0000-0000-0000-000000000005',
    'devops': 'd0000000-0000-0000-0000-000000000005',
    'cybersecurity-ethical-hacking': 'd0000000-0000-0000-0000-000000000006',
    'cybersecurity': 'd0000000-0000-0000-0000-000000000006',
    'cyber-security': 'd0000000-0000-0000-0000-000000000006',
    'security': 'd0000000-0000-0000-0000-000000000006',
    'ui-ux-design': 'd0000000-0000-0000-0000-000000000007',
    'ui-ux': 'd0000000-0000-0000-0000-000000000007',
    'prompt-engineering': 'd0000000-0000-0000-0000-000000000008',
    'prompt': 'd0000000-0000-0000-0000-000000000008',
    'generative-ai': 'd0000000-0000-0000-0000-000000000008',
    'biotechnology': 'd0000000-0000-0000-0000-000000000009',
    'biotech': 'd0000000-0000-0000-0000-000000000009',
    'dsa': 'd0000000-0000-0000-0000-000000000010',
    'cpp': 'd0000000-0000-0000-0000-000000000011',
    'c': 'd0000000-0000-0000-0000-000000000011',
    'business-management': 'd0000000-0000-0000-0000-000000000012',
    'civil-engineering': 'd0000000-0000-0000-0000-000000000013',
    'civil-eng': 'd0000000-0000-0000-0000-000000000013',
    'electrical-engineering': 'd0000000-0000-0000-0000-000000000014',
    'eee-eng': 'd0000000-0000-0000-0000-000000000014',
    'mechanical-engineering': 'd0000000-0000-0000-0000-000000000015',
    'mech-eng': 'd0000000-0000-0000-0000-000000000015',
    'core-engineering': 'd0000000-0000-0000-0000-000000000015',
    'chemical-engineering': 'd0000000-0000-0000-0000-000000000022',
    'chemical': 'd0000000-0000-0000-0000-000000000022',
    'chem-eng': 'd0000000-0000-0000-0000-000000000022',
    'architectural-engineering': '31c4ebdf-3c20-469f-a123-a2fb0d9b4d5f',
    'aerospace-engineering': '3aa9bfe8-946a-4b71-bc4a-4ed333cbeae8',
    'aerospace-automobile': '3aa9bfe8-946a-4b71-bc4a-4ed333cbeae8',
    'digital-marketing': '8861c787-9d9b-49c0-8010-f0466f721297',
    'finance-accounting': '379dae86-22a4-482f-8855-20a5b7aa96c0',
    'robotics': '9e132e4f-4246-49b1-ac25-8eb930bb9d47',
    'docker': 'a11b1e19-b119-4a46-91a8-34e416aab465',
    'golang': '8868bcfe-be76-41fd-bc16-1d877da002dc',
    'fashion-designing': '05940605-b7b0-4a91-93e9-447089110a78',
    'biomedical-engineering': 'd0000000-0000-0000-0000-000000000019',
    'environmental-engineering': 'd0000000-0000-0000-0000-000000000020',
    'computer-science': 'd0000000-0000-0000-0000-000000000021',
    'iot': 'd0000000-0000-0000-0000-000000000016',
    'iot-embedded': 'd0000000-0000-0000-0000-000000000016',
    'internet-of-things': 'd0000000-0000-0000-0000-000000000016',
    'embedded-systems': 'd0000000-0000-0000-0000-000000000016',
  };

  // Resolve domainId if non-UUID (e.g. "dyn-ai-ml" or slug like "ai-ml")
  const rawDomainStr = String(domainId || '').replace(/^dyn-/, '').toLowerCase().trim();
  let cleanSlug = rawDomainStr;
  let validDomainId = domainId;

  if (isValidUuid(domainId)) {
    // Reverse lookup slug if UUID is provided
    for (const [s, uuid] of Object.entries(CANONICAL_DOMAIN_MAP)) {
      if (uuid === domainId) { cleanSlug = s; break; }
    }
  } else {
    validDomainId = CANONICAL_DOMAIN_MAP[cleanSlug];
    if (!validDomainId) {
      try {
        const foundDomain = await supabaseFetch(`domains?slug=eq.${cleanSlug}&select=id,slug&limit=1`);
        if (Array.isArray(foundDomain) && foundDomain.length > 0) {
          validDomainId = foundDomain[0].id;
          cleanSlug = foundDomain[0].slug || cleanSlug;
        } else {
          const foundList = await supabaseFetch('domains?select=id,slug&limit=50');
          const match = (foundList || []).find(d => {
            const dSlug = (d.slug || '').toLowerCase();
            return dSlug === cleanSlug;
          });
          if (match) {
            validDomainId = match.id;
            cleanSlug = match.slug;
          }
        }
      } catch {
        validDomainId = null;
      }
    }
  }

  // Determine effectiveDomain strictly based on domainNameOverride or cleanSlug
  let effectiveDomain = (domainNameOverride && String(domainNameOverride).trim()) || '';
  if (effectiveDomain) {
    const derivedSlug = effectiveDomain.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (cleanSlug === 'others' || cleanSlug === 'other' || cleanSlug === 'custom-topic' || cleanSlug === 'custom' || !cleanSlug) {
      cleanSlug = derivedSlug;
    }
  }
  if (!effectiveDomain && cleanSlug) {
    effectiveDomain = CANONICAL_DOMAIN_NAMES[cleanSlug] || cleanSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  // 1. Check student attempt count
  let attempts = [];
  if (isValidUuid(studentId) && validDomainId) {
    try {
      attempts = await supabaseFetch(`quiz_attempts?student_id=eq.${validStudentId}&domain_id=eq.${validDomainId}&select=id,status`);
    } catch {}
  }
  const attemptCount = Array.isArray(attempts) ? attempts.length : 0;

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const targetTotal = Math.max(1, Number(requestedTargetCount) || config.questions_per_quiz || 30);
  const easyCount = Math.max(1, Math.round(targetTotal * 0.34));
  const medCount = Math.max(1, Math.round(targetTotal * 0.33));
  const hardCount = Math.max(0, targetTotal - easyCount - medCount);

  let selectedQuestions = [];
  const apiKey = config.gemini_api_key || process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  // 1. Try to load authentic domain questions specifically for effectiveDomain FIRST for fast response times
  let authenticBank = [];
  try {
    authenticBank = domainQuestionBank.getDomainQuestions(cleanSlug || effectiveDomain, targetTotal, effectiveDomain) || [];
  } catch (e) {}

  if (authenticBank.length > 0) {
    console.log(`[QuizEngine] Using authentic domain question bank specifically for "${effectiveDomain}" (Instant load).`);
    selectedQuestions = authenticBank.map((q, idx) => {
      const tierNum = idx < easyCount ? 1 : idx < (easyCount + medCount) ? 2 : 3;
      const tierLabel = idx < easyCount ? 'Easy' : idx < (easyCount + medCount) ? 'Medium' : 'Advanced';
      return {
        ...q,
        question_number: idx + 1,
        tier_number: tierNum,
        tier_label: tierLabel,
        options: shuffleArray((q.options || []).map(o => ({
          id: o.id,
          question_id: o.question_id || q.id,
          option_text: o.option_text,
          option_order: o.option_order
        })))
      };
    });
  } else if (apiKey && effectiveDomain) {
    // 2. If it's a CUSTOM domain not in the bank, fall back to Google Gemini to generate questions dynamically
    try {
      console.log(`[QuizEngine] Calling Gemini API to generate ${targetTotal} assessment questions specifically for custom domain "${effectiveDomain}"...`);
      const geminiQs = await generateDomainQuestionsWithGemini(effectiveDomain, [], apiKey, targetTotal);
      const validGeminiQs = (geminiQs || []).filter(gq => validateSemanticDomainQuestion(gq, effectiveDomain));

      if (validGeminiQs.length > 0) {
        console.log(`[QuizEngine] Successfully validated ${validGeminiQs.length} domain questions from Gemini for "${effectiveDomain}"`);
        selectedQuestions = validGeminiQs.map((gq, idx) => {
          const qId = `gemini-${cleanSlug || 'domain'}-${idx + 1}-${Date.now()}`;
          const rawOpts = gq.options.map((opt, oIdx) => ({
            id: `${qId}-opt-${String.fromCharCode(97 + oIdx)}`,
            question_id: qId,
            option_text: opt.text,
            option_order: oIdx + 1,
            is_correct: !!opt.is_correct
          }));
          const correctOpt = rawOpts.find(o => o.is_correct) || rawOpts[0];
          domainQuestionBank.cacheCorrectAnswer(qId, correctOpt.id);

          const tierNum = idx < easyCount ? 1 : idx < (easyCount + medCount) ? 2 : 3;
          const tierLabel = idx < easyCount ? 'Easy' : idx < (easyCount + medCount) ? 'Medium' : 'Advanced';

          // Shuffle options and strip is_correct for client security
          const shuffledOpts = shuffleArray(rawOpts).map((o, oIdx) => ({
            id: o.id,
            question_id: o.question_id,
            option_text: o.option_text,
            option_order: oIdx + 1
          }));

          return {
            id: qId,
            question_number: idx + 1,
            tier_number: tierNum,
            tier_label: tierLabel,
            question_text: cleanQuestionText(gq.question_text),
            difficulty: gq.difficulty || (tierNum === 1 ? 'easy' : tierNum === 2 ? 'medium' : 'hard'),
            marks: 1,
            topic: gq.topic || effectiveDomain,
            options: shuffledOpts
          };
        });
      }
    } catch (geminiErr) {
      console.error(`[QuizEngine] Gemini generation error for custom domain "${effectiveDomain}":`, geminiErr.message);
      throw new Error(`Failed to generate assessment questions specifically for custom domain ${effectiveDomain}: ${geminiErr.message}`);
    }
  }

  if (selectedQuestions.length === 0) {
    throw new Error(`Failed to find or generate assessment questions specifically for domain "${effectiveDomain}".`);
  }

  const sanitizedQuestions = selectedQuestions;

  // 4. Create attempt record with dynamic timer duration
  const quizDurationMinutes = config.quiz_duration_minutes || config.quiz_timer_minutes || 15;
  const expiresAt = new Date(Date.now() + quizDurationMinutes * 60 * 1000).toISOString();
  const attemptPayload = {
    student_id: validStudentId,
    domain_id: validDomainId || 'd0000000-0000-0000-0000-000000000001',
    status: 'started',
    total_questions: sanitizedQuestions.length,
    started_at: new Date().toISOString(),
    expires_at: expiresAt
  };

  const crypto = require('crypto');
  let createdAttempt = {
    id: crypto.randomUUID(),
    ...attemptPayload
  };

  try {
    const newAttemptArr = await supabaseFetch('quiz_attempts', {
      method: 'POST',
      headers: { 'Prefer': 'return=representation' },
      body: [attemptPayload]
    });
    if (Array.isArray(newAttemptArr) && newAttemptArr.length > 0) {
      createdAttempt = newAttemptArr[0];
    }
  } catch (attInsertErr) {
    console.warn('[QuizEngine] Note on quiz_attempts persistence:', attInsertErr.message);
  }

  return {
    attemptId: createdAttempt.id,
    domain_name: effectiveDomain,
    domain_id: cleanSlug || domainId,
    attemptNumber: attemptCount + 1,
    maxAttempts,
    totalQuestions: sanitizedQuestions.length,
    durationMinutes: quizDurationMinutes,
    durationSeconds: quizDurationMinutes * 60,
    difficultyBreakdown: {
      easy: easyCount,
      medium: medCount,
      hard: hardCount
    },
    questions: sanitizedQuestions,
    startedAt: createdAttempt.started_at,
    expiresAt: createdAttempt.expires_at
  };
}

/**
 * Submit Quiz Attempt:
 * - Server-side grading (evaluates against true is_correct from DB)
 * - Calculates percentage and skill level
 * - Saves quiz_answers and quiz_results
 */
async function submitQuizAttempt(attemptId, studentId, answers, declaredTotalQuestions) {
  // answers is an object of { [question_id]: selected_option_id }
  const answerEntries = Object.entries(answers || {});
  const questionIds = answerEntries.map(([qId]) => qId);

  // 1 & 2. Fetch attempt and authoritative correct options in PARALLEL
  let attempt = null;
  let correctOptions = [];

  const [attemptRes, optionsRes] = await Promise.allSettled([
    supabaseFetch(`quiz_attempts?id=eq.${attemptId}&select=*`),
    questionIds.length > 0
      ? supabaseFetch(`question_options?question_id=in.(${questionIds.join(',')})&select=id,question_id,is_correct`)
      : Promise.resolve([])
  ]);

  if (attemptRes.status === 'fulfilled' && Array.isArray(attemptRes.value) && attemptRes.value.length > 0) {
    attempt = attemptRes.value[0];
  }
  if (optionsRes.status === 'fulfilled' && Array.isArray(optionsRes.value)) {
    correctOptions = optionsRes.value;
  }

  const domainId = attempt?.domain_id || null;
  const correctOptionMap = new Map();
  correctOptions.forEach(opt => {
    if (opt.is_correct) {
      correctOptionMap.set(opt.question_id, opt.id);
    }
  });

  // Supplement correct answers from domainQuestionBank if not in DB
  for (const [qId] of answerEntries) {
    if (!correctOptionMap.has(qId)) {
      for (const [domKey, qList] of Object.entries(domainQuestionBank.DOMAIN_QUESTIONS)) {
        for (let i = 0; i < qList.length; i++) {
          const item = qList[i];
          const candidateQId1 = `${domKey}-q-${i + 1}`;
          const candidateQId2 = `${domKey}-${i + 1}`;
          if (qId === candidateQId1 || qId === candidateQId2 || qId.includes(candidateQId1) || qId.includes(candidateQId2)) {
            const correctOpt1 = `${candidateQId1}-opt-${String.fromCharCode(97 + item.ans)}`;
            const correctOpt2 = `${candidateQId2}-${String.fromCharCode(97 + item.ans)}`;
            correctOptionMap.set(qId, [correctOpt1, correctOpt2]);
            break;
          }
        }
        if (correctOptionMap.has(qId)) break;
      }
    }
  }

  // 3. True total questions is either declared by caller, from attempt record, or default 30
  const totalQuestions = Math.max(
    1,
    Number(declaredTotalQuestions) ||
    Number(attempt?.total_questions) ||
    (answerEntries.length > 0 ? answerEntries.length : 30)
  );

  // Evaluate answers in-memory
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  for (const [qId, selectedOptId] of answerEntries) {
    if (selectedOptId) {
      if (domainQuestionBank.checkCorrectAnswer && domainQuestionBank.checkCorrectAnswer(qId, selectedOptId)) {
        correctAnswers++;
        continue;
      }

      const expected = correctOptionMap.get(qId);
      const isMatch = Array.isArray(expected)
        ? expected.some(exp => exp === selectedOptId || selectedOptId.endsWith(exp.slice(-6)))
        : expected === selectedOptId;

      if (isMatch) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    }
  }

  const unanswered = Math.max(0, totalQuestions - (correctAnswers + incorrectAnswers));
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  let skillLevel = 'Foundation';
  if (percentage >= 90) skillLevel = 'Expert';
  else if (percentage >= 75) skillLevel = 'Advanced';
  else if (percentage >= 60) skillLevel = 'Intermediate';
  else if (percentage >= 40) skillLevel = 'Beginner';
  else skillLevel = 'Foundation';

  const passingScore = 50;
  const passed = percentage >= passingScore;

  // 4. Calculate time taken
  const startedAt = attempt?.started_at ? new Date(attempt.started_at) : new Date(Date.now() - 15 * 60 * 1000);
  const now = new Date();
  const timeTakenSeconds = Math.max(1, Math.round((now.getTime() - startedAt.getTime()) / 1000));

  // 5, 6, 7. Persist answers, attempt status, and results in PARALLEL non-blocking
  const answersToInsert = answerEntries.map(([qId, optId]) => ({
    attempt_id: attemptId,
    question_id: qId,
    selected_option_id: optId || null,
    answered_at: now.toISOString()
  }));

  const resultPayload = {
    attempt_id: attemptId,
    student_id: studentId,
    domain_id: domainId,
    total_questions: totalQuestions,
    correct_answers: correctAnswers,
    incorrect_answers: incorrectAnswers,
    unanswered: unanswered,
    total_marks: totalQuestions,
    obtained_marks: correctAnswers,
    percentage: percentage,
    skill_level: skillLevel,
    personalized_message: `Assessment completed with ${percentage}% score. Skill level: ${skillLevel}.`,
    calculated_at: now.toISOString(),
    created_at: now.toISOString()
  };

  const persistTasks = [
    // Update quiz_attempts status
    supabaseFetch(`quiz_attempts?id=eq.${attemptId}`, {
      method: 'PATCH',
      body: {
        status: 'submitted',
        submitted_at: now.toISOString(),
        time_taken_seconds: timeTakenSeconds,
        updated_at: now.toISOString()
      }
    }),
    // Insert quiz_results
    supabaseFetch('quiz_results', {
      method: 'POST',
      headers: { 'Prefer': 'resolution=merge-duplicates' },
      body: [resultPayload]
    }),
    // Upsert leads table with quiz completion status and high intent score
    (async () => {
      try {
        await supabaseFetch('leads?on_conflict=student_id', {
          method: 'POST',
          headers: { 'Prefer': 'resolution=merge-duplicates' },
          body: [{
            student_id: studentId,
            has_completed_quiz: true,
            has_viewed_result: true,
            lead_score: Math.min(100, Math.max(50, percentage + 20)),
            lead_status: percentage >= 50 ? 'HOT' : 'WARM',
            qualification_reason: `High Intent: completed assessment (${percentage}%), scored ${skillLevel} level`,
            last_activity_at: now.toISOString(),
            updated_at: now.toISOString()
          }]
        });
      } catch {
        await supabaseFetch(`leads?student_id=eq.${studentId}`, {
          method: 'PATCH',
          body: {
            has_completed_quiz: true,
            has_viewed_result: true,
            lead_score: Math.min(100, Math.max(50, percentage + 20)),
            lead_status: percentage >= 50 ? 'HOT' : 'WARM',
            qualification_reason: `High Intent: completed assessment (${percentage}%), scored ${skillLevel} level`,
            last_activity_at: now.toISOString(),
            updated_at: now.toISOString()
          }
        }).catch(() => {});
      }
    })()
  ];

  if (answersToInsert.length > 0) {
    persistTasks.push(
      supabaseFetch('quiz_answers', {
        method: 'POST',
        headers: { 'Prefer': 'resolution=merge-duplicates' },
        body: answersToInsert
      })
    );
  }

  // Fire DB persistence concurrently
  Promise.allSettled(persistTasks).catch((err) => {
    console.warn('[QuizEngine] Background persist warning:', err.message);
  });

  return {
    attemptId,
    studentId,
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    unanswered,
    percentage,
    skillLevel,
    passed,
    timeTakenSeconds,
    submittedAt: now.toISOString()
  };
}

module.exports = {
  getQuizConfig,
  updateQuizConfig,
  getDomainBankStats,
  generateAndStoreDomainBank,
  startQuizAttempt,
  submitQuizAttempt
};
