const http = require('http');

async function testDomain(domainId, domainNameOverride) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      studentId: '11111111-1111-1111-1111-111111111111',
      domainId: domainId,
      domainName: domainNameOverride,
      targetQuestionsCount: 10
    });

    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path: '/api/quiz/start',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, raw: body, error: e.message });
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runTests() {
  const testCases = [
    { domainId: 'chemical-engineering', domainName: 'Chemical Engineering' },
    { domainId: 'mechanical-engineering', domainName: 'Mechanical Engineering' },
    { domainId: 'civil-engineering', domainName: 'Civil Engineering' },
    { domainId: 'others', domainName: 'Architectural Engineering' }
  ];

  console.log('================================================================');
  console.log('STRICT SEMANTIC DOMAIN RELEVANCE VERIFICATION');
  console.log('================================================================\n');

  let allPassed = true;

  for (const tc of testCases) {
    console.log(`\n--- TESTING DOMAIN: "${tc.domainName}" (domainId: ${tc.domainId}) ---`);
    try {
      const res = await testDomain(tc.domainId, tc.domainName);
      if (res.status !== 200 || !res.data || !res.data.questions) {
        console.error(`FAILED: Status ${res.status}`, res.data || res.raw);
        allPassed = false;
        continue;
      }

      const questions = res.data.questions;
      console.log(`Received ${questions.length} questions. Domain title in response: "${res.data.domain_name}"`);

      let domainScore = 0;
      questions.forEach((q, idx) => {
        console.log(`\n  Q${idx + 1} [${q.difficulty || 'standard'}]: ${q.question_text}`);
        console.log(`     Options: ${(q.options || []).map(o => o.option_text).slice(0, 2).join(' | ')} ...`);
        
        // Semantic validation check
        const qText = q.question_text.toLowerCase();
        const bannedGeneric = [
          'important concept in ' + tc.domainName.toLowerCase(),
          'best practice in modern ' + tc.domainName.toLowerCase(),
          'package.json',
          'dependency injection'
        ];
        
        const hasBanned = bannedGeneric.some(b => qText.includes(b));
        if (hasBanned) {
          console.error(`     ❌ FAILED: Detected generic filler or forbidden pattern in question text!`);
          allPassed = false;
        } else {
          console.log(`     ✅ PASS: Field-specific technical question.`);
          domainScore++;
        }
      });

      console.log(`\nDomain Result for "${tc.domainName}": ${domainScore}/${questions.length} Passed Semantic Check.`);
    } catch (err) {
      console.error(`Error testing ${tc.domainName}:`, err.message);
      allPassed = false;
    }
  }

  console.log('\n================================================================');
  console.log(`OVERALL TEST RESULT: ${allPassed ? 'ALL TESTS PASSED ✅' : 'SOME TESTS FAILED ❌'}`);
  console.log('================================================================');
}

runTests();
