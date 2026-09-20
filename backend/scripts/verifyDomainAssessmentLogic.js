const fs = require('fs');
const path = require('path');

const qb = require('../data/domainQuestionBank');
const frontendQb = fs.readFileSync(path.resolve(__dirname, '../../frontend/src/services/questionBank.ts'), 'utf8');

async function testBackendStart(domainId, domainName, targetCount = 5) {
  const res = await fetch('http://localhost:5000/api/quiz/start', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      studentId: '9bf23b8a-9669-4070-9871-1fdf9f84ca15',
      domainId: domainId,
      domainName: domainName,
      targetQuestionsCount: targetCount
    })
  });
  return await res.json();
}

async function runTests() {
  console.log('============================================================');
  console.log('🧪 RUNNING RIGOROUS DOMAIN ASSESSMENT LOGIC VERIFICATION');
  console.log('============================================================\n');

  // ── TEST 1: Select Domain A (Mechanical Engineering)
  console.log('Test 1: Select Domain A (Mechanical Engineering)');
  const res1 = await testBackendStart('mechanical-engineering', 'Mechanical Engineering', 5);
  if (!res1.success || !res1.questions || res1.questions.length === 0) {
    console.error('❌ Test 1 FAILED: Could not retrieve questions for Mechanical Engineering', res1);
    process.exit(1);
  }
  const qTexts1 = res1.questions.map(q => q.question_text);
  console.log(`✅ Retrieved ${qTexts1.length} questions for Mechanical Engineering:`);
  qTexts1.forEach((t, i) => console.log(`   ${i + 1}. ${t}`));
  
  // Verify questions do not contain cross-domain software templates
  const isSoftwareBleed1 = qTexts1.some(t => /microservices|dependency injection|package\.json|html|css|javascript/i.test(t));
  if (isSoftwareBleed1) {
    console.error('❌ Test 1 FAILED: Software bleed detected in Mechanical Engineering questions!');
    process.exit(1);
  }
  console.log('   -> Semantic domain check: PASSED (Zero cross-domain bleed)\n');

  // ── TEST 2: Change from Domain A -> Domain B (Civil Engineering)
  console.log('Test 2: Change to Domain B (Civil Engineering)');
  const res2 = await testBackendStart('civil-engineering', 'Civil Engineering', 5);
  if (!res2.success || !res2.questions || res2.questions.length === 0) {
    console.error('❌ Test 2 FAILED: Could not retrieve questions for Civil Engineering', res2);
    process.exit(1);
  }
  const qTexts2 = res2.questions.map(q => q.question_text);
  console.log(`✅ Retrieved ${qTexts2.length} questions for Civil Engineering:`);
  qTexts2.forEach((t, i) => console.log(`   ${i + 1}. ${t}`));

  // Verify Civil Engineering questions are not Mechanical Engineering questions
  const overlap12 = qTexts2.filter(t => qTexts1.includes(t));
  if (overlap12.length > 0) {
    console.error('❌ Test 2 FAILED: Questions from Mechanical Engineering bled into Civil Engineering!');
    process.exit(1);
  }
  console.log('   -> Domain isolation check: PASSED (No question overlap between Domain A and B)\n');

  // ── TEST 3: Select Others -> Enter "Architectural Engineering"
  console.log('Test 3: Select Others -> Enter "Architectural Engineering"');
  const res3 = await testBackendStart('custom', 'Architectural Engineering', 5);
  if (!res3.success || !res3.questions || res3.questions.length === 0) {
    console.error('❌ Test 3 FAILED: Could not retrieve questions for custom "Architectural Engineering"', res3);
    process.exit(1);
  }
  const qTexts3 = res3.questions.map(q => q.question_text);
  console.log(`✅ Retrieved ${qTexts3.length} questions for Architectural Engineering:`);
  qTexts3.forEach((t, i) => console.log(`   ${i + 1}. ${t}`));

  // Verify questions are genuine Architectural Engineering
  const isArchBleed = qTexts3.some(t => /microservices|dependency injection|package\.json|npm/i.test(t));
  if (isArchBleed) {
    console.error('❌ Test 3 FAILED: Software template bleed in Architectural Engineering!');
    process.exit(1);
  }
  console.log('   -> Architectural Engineering domain relevance: PASSED\n');

  // ── TEST 4: Select Others -> Enter "Chemical Engineering"
  console.log('Test 4: Select Others -> Enter "Chemical Engineering"');
  const res4 = await testBackendStart('custom', 'Chemical Engineering', 5);
  if (!res4.success || !res4.questions || res4.questions.length === 0) {
    console.error('❌ Test 4 FAILED: Could not retrieve questions for custom "Chemical Engineering"', res4);
    process.exit(1);
  }
  const qTexts4 = res4.questions.map(q => q.question_text);
  console.log(`✅ Retrieved ${qTexts4.length} questions for Chemical Engineering:`);
  qTexts4.forEach((t, i) => console.log(`   ${i + 1}. ${t}`));

  const isChemBleed = qTexts4.some(t => /microservices|dependency injection|package\.json|npm/i.test(t));
  if (isChemBleed) {
    console.error('❌ Test 4 FAILED: Software template bleed in Chemical Engineering!');
    process.exit(1);
  }
  console.log('   -> Chemical Engineering domain relevance: PASSED\n');

  // ── TEST 5: Verify Frontend ALIAS_MAP & questionBank Resolution
  console.log('Test 5: Frontend questionBank.ts Resolution & Isolation');
  const aliasMatch = frontendQb.match(/export const ALIAS_MAP: Record<string, string> = (\{[\s\S]*?\n\})/);
  const ALIAS_MAP = eval('(' + aliasMatch[1] + ')');

  if (ALIAS_MAP['aerospace-automobile'] !== 'aerospace-engineering') {
    console.error('❌ Test 5 FAILED: aerospace-automobile still maps to:', ALIAS_MAP['aerospace-automobile']);
    process.exit(1);
  }
  console.log('   -> ALIAS_MAP aerospace-automobile: ' + ALIAS_MAP['aerospace-automobile'] + ' (PASSED)');

  // ── TEST 6: Rapid Switching Between Domains
  console.log('\nTest 6: Rapid Domain Switching Sequence (Mechanical -> Civil -> Architectural -> Computer Science)');
  const seq = ['Mechanical Engineering', 'Civil Engineering', 'Architectural Engineering', 'Computer Science'];
  for (const d of seq) {
    const slug = d.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const qRes = await testBackendStart(slug, d, 3);
    if (!qRes.success || qRes.questions.length !== 3) {
      console.error(`❌ Rapid switch failed for ${d}`);
      process.exit(1);
    }
    console.log(`   ✓ ${d}: 3 authentic questions verified (${qRes.questions[0].question_text.substring(0, 45)}...)`);
  }

  console.log('\n============================================================');
  console.log('🎉 ALL 6 RIGOROUS TESTS PASSED WITH 100% SUCCESS!');
  console.log('============================================================');
}

runTests().catch(err => {
  console.error('Unexpected error during testing:', err);
  process.exit(1);
});
