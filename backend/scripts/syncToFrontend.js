const fs = require('fs');
const path = require('path');

const backendBank = require('../data/domainQuestionBank');
const frontendPath = path.resolve(__dirname, '../../frontend/src/services/questionBank.ts');

let feContent = fs.readFileSync(frontendPath, 'utf8');

// 1. Identify which domains in backend are missing from frontend
const backendDomains = Object.keys(backendBank.DOMAIN_QUESTIONS);
console.log(`Backend has ${backendDomains.length} domains in DOMAIN_QUESTIONS.`);

const missingFromFrontend = [];
for (const dom of backendDomains) {
  const domRegex = new RegExp(`"${dom}"\\s*:\\s*\\[`);
  if (!domRegex.test(feContent)) {
    missingFromFrontend.push(dom);
  }
}
console.log(`Missing from frontend DOMAIN_QUESTIONS:`, missingFromFrontend);

// 2. Format missing domains as Question[] objects for frontend
const formattedBlocks = [];

for (const dom of missingDomains()) {
  const rawList = backendBank.DOMAIN_QUESTIONS[dom];
  if (!rawList) continue;

  const questionsFormatted = rawList.map((item, idx) => {
    const qId = `${dom}-${idx + 1}`;
    const diff = idx < 10 ? 'easy' : idx < 20 ? 'medium' : 'hard';
    const opts = (item.opts || []).slice(0, 4).map((optText, oIdx) => {
      const optId = `${qId}-${String.fromCharCode(97 + oIdx)}`;
      return `        {\n          "id": ${JSON.stringify(optId)},\n          "option_text": ${JSON.stringify(optText)},\n          "is_correct": ${oIdx === item.ans}\n        }`;
    }).join(',\n');

    return `    {\n      "id": ${JSON.stringify(qId)},\n      "question_text": ${JSON.stringify(item.q)},\n      "difficulty": "${diff}",\n      "marks": 1,\n      "options": [\n${opts}\n      ]\n    }`;
  }).join(',\n');

  formattedBlocks.push(`  "${dom}": [\n${questionsFormatted}\n  ]`);
}

function missingDomains() {
  return missingFromFrontend;
}

// 3. Insert into frontend DOMAIN_QUESTIONS before closing `};`
if (formattedBlocks.length > 0) {
  const match = feContent.match(/\r?\n\};\r?\n\r?\nexport const ALIAS_MAP/);
  if (!match) {
    console.error('Could not find insertion point in frontend/src/services/questionBank.ts');
    process.exit(1);
  }

  const insertIndex = match.index;
  const before = feContent.substring(0, insertIndex);
  const after = feContent.substring(insertIndex);
  feContent = before + ',\n' + formattedBlocks.join(',\n') + after;
  console.log(`Inserted ${formattedBlocks.length} missing domains into frontend questionBank.ts`);
}

// 4. Update ALIAS_MAP with comprehensive aliases
const comprehensiveAliasMap = `export const ALIAS_MAP: Record<string, string> = {
  // Software & Web Development
  "web-development": "full-stack-web-development",
  "web-dev": "full-stack-web-development",
  "fullstack": "full-stack-web-development",
  "full-stack": "full-stack-web-development",
  "full-stack-web-development": "full-stack-web-development",
  "frontend": "full-stack-web-development",
  "backend": "full-stack-web-development",
  "javascript": "full-stack-web-development",
  "typescript": "full-stack-web-development",
  "react": "full-stack-web-development",
  "nextjs": "full-stack-web-development",
  "angular": "full-stack-web-development",
  "vue": "full-stack-web-development",
  "tailwind": "full-stack-web-development",
  "nodejs": "full-stack-web-development",
  "node": "full-stack-web-development",
  "php": "full-stack-web-development",
  "swift": "full-stack-web-development",
  "flutter": "full-stack-web-development",
  "react-native": "full-stack-web-development",

  // Programming Languages
  "python": "python-programming",
  "python-programming": "python-programming",
  "py": "python-programming",
  "django": "python-programming",
  "fastapi": "python-programming",
  "java": "java-backend-architecture",
  "java-backend-architecture": "java-backend-architecture",
  "spring": "java-backend-architecture",
  "springboot": "java-backend-architecture",
  "kotlin": "java-backend-architecture",
  "cpp": "cpp",
  "c": "cpp",
  "csharp": "cpp",
  "golang": "cpp",
  "go": "cpp",
  "rust": "cpp",

  // DSA & Computer Science
  "dsa": "dsa",
  "data-structures": "dsa",
  "algorithms": "dsa",
  "data-structures-algorithms": "dsa",
  "computer-science": "computer-science",
  "cs": "computer-science",
  "sql-databases": "computer-science",
  "sql": "computer-science",
  "mongodb": "computer-science",
  "redis": "computer-science",
  "blockchain": "computer-science",

  // AI & Data
  "ai-ml": "ai-ml",
  "ai": "ai-ml",
  "ml": "ai-ml",
  "artificial-intelligence": "ai-ml",
  "machine-learning": "ai-ml",
  "data-science": "ai-ml",
  "data-science-machine-learning": "ai-ml",
  "data-science-analytics": "ai-ml",
  "data-analytics": "ai-ml",
  "prompt-engineering": "prompt-engineering",
  "prompt": "prompt-engineering",
  "generative-ai": "prompt-engineering",
  "genai": "prompt-engineering",
  "llm": "prompt-engineering",
  "agentic-ai": "prompt-engineering",

  // Cloud & DevOps
  "cloud": "cloud-devops",
  "cloud-computing": "cloud-devops",
  "devops": "cloud-devops",
  "cloud-devops": "cloud-devops",
  "aws": "cloud-devops",
  "azure": "cloud-devops",
  "gcp": "cloud-devops",
  "docker": "cloud-devops",
  "kubernetes": "cloud-devops",
  "linux": "cloud-devops",
  "devops-ci-cd": "cloud-devops",

  // Cybersecurity
  "cyber-security": "cybersecurity-ethical-hacking",
  "cybersecurity": "cybersecurity-ethical-hacking",
  "security": "cybersecurity-ethical-hacking",
  "ethical-hacking": "cybersecurity-ethical-hacking",
  "cybersecurity-ethical-hacking": "cybersecurity-ethical-hacking",

  // Core Engineering Disciplines
  "mechanical-engineering": "mechanical-engineering",
  "mech-eng": "mechanical-engineering",
  "mechanical": "mechanical-engineering",
  "core-engineering": "core-engineering",
  "civil-engineering": "civil-engineering",
  "civil-eng": "civil-engineering",
  "civil": "civil-engineering",
  "structural-engineering": "civil-engineering",
  "electrical-engineering": "electrical-engineering",
  "eee-eng": "electrical-engineering",
  "electrical": "electrical-engineering",
  "power-systems": "electrical-engineering",
  "chemical-engineering": "chemical-engineering",
  "chemical-eng": "chemical-engineering",
  "chemical": "chemical-engineering",
  "aerospace-engineering": "aerospace-engineering",
  "aerospace-automobile": "aerospace-engineering",
  "aerospace": "aerospace-engineering",
  "automobile": "aerospace-engineering",
  "industrial-engineering": "mechanical-engineering",
  "robotics-engineering": "robotics-engineering",
  "robotics": "robotics-engineering",
  "robot": "robotics-engineering",
  "petroleum-engineering": "petroleum-engineering",
  "petroleum": "petroleum-engineering",
  "oil-gas": "petroleum-engineering",
  "marine-engineering": "marine-engineering",
  "marine": "marine-engineering",
  "naval-architecture": "marine-engineering",
  "biomedical-engineering": "biomedical-engineering",
  "biomedical": "biomedical-engineering",
  "environmental-engineering": "environmental-engineering",
  "environmental": "environmental-engineering",
  "architectural-engineering": "architectural-engineering",
  "architectural": "architectural-engineering",
  "architecture": "architectural-engineering",
  "biotechnology": "biotechnology",
  "biotech": "biotechnology",
  "bioinformatics": "biotechnology",
  "biotech-eng": "biotechnology",
  "iot-embedded": "iot-embedded",
  "iot": "iot-embedded",
  "embedded-systems": "iot-embedded",
  "electronics-communication": "iot-embedded",
  "ece-eng": "iot-embedded",

  // Creative & Design
  "ui-ux-design": "ui-ux-design",
  "ui-ux": "ui-ux-design",
  "product-management": "ui-ux-design",
  "graphic-design": "ui-ux-design",
  "graphic-media": "ui-ux-design",
  "technical-writing": "ui-ux-design",
  "fashion-design": "fashion-design",
  "fashion": "fashion-design",
  "fashion-designing": "fashion-design",
  "film-production": "film-production",
  "film": "film-production",
  "cinema": "film-production",
  "cinematography": "film-production",
  "interior-design": "interior-design",
  "interior": "interior-design",
  "game-development": "game-development",
  "game-dev": "game-development",
  "gaming": "game-development",

  // Business & Management
  "business-management": "business-management",
  "mba-mgmt": "business-management",
  "finance-accounting": "business-management",
  "finance-acc": "business-management",
  "human-resources": "business-management",
  "hr-talent": "business-management",
  "digital-marketing": "business-management",
  "supply-chain-operations": "business-management",
  "sales-business-development": "business-management"
};`;

const aliasRegex = /export const ALIAS_MAP: Record<string, string> = \{[\s\S]*?\};/;
feContent = feContent.replace(aliasRegex, comprehensiveAliasMap);

// 5. Write updated frontend file
fs.writeFileSync(frontendPath, feContent, 'utf8');
console.log('Successfully updated frontend/src/services/questionBank.ts with all domains and aliases!');
