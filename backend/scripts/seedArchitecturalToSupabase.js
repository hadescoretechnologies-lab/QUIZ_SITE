const fs = require('fs');
const path = require('path');

const env = fs.readFileSync(path.resolve(__dirname, '../.env'), 'utf8');
const url = env.match(/SUPABASE_URL=([^\r\n]+)/)[1];
const key = env.match(/SUPABASE_ANON_KEY=([^\r\n]+)/)[1];

const qb = require('../data/domainQuestionBank');
const archQuestions = qb.DOMAIN_QUESTIONS['architectural-engineering'];

async function seed() {
  console.log('Seeding Architectural Engineering to Supabase...');
  const domainId = '31c4ebdf-3c20-469f-a123-a2fb0d9b4d5f';

  // 1. Delete existing questions for this domain
  const delRes = await fetch(`${url}/rest/v1/questions?domain_id=eq.${domainId}`, {
    method: 'DELETE',
    headers: {
      'apikey': key,
      'Authorization': 'Bearer ' + key,
      'Prefer': 'return=minimal'
    }
  });
  console.log('Deleted old questions status:', delRes.status);

  // 2. Insert new authentic questions
  let count = 0;
  for (let i = 0; i < archQuestions.length; i++) {
    const q = archQuestions[i];
    const tier = i < 10 ? 'easy' : i < 20 ? 'medium' : 'hard';

    const insertQRes = await fetch(`${url}/rest/v1/questions`, {
      method: 'POST',
      headers: {
        'apikey': key,
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        domain_id: domainId,
        question_text: q.question_text || q.q,
        difficulty: tier,
        marks: 1,
        active: true,
        display_order: i + 1,
        explanation: 'Authentic architectural engineering assessment question'
      })
    });

    const insertedQ = await insertQRes.json();
    if (insertedQ && insertedQ[0] && insertedQ[0].id) {
      const qId = insertedQ[0].id;
      const opts = (q.options || []).map((o, idx) => ({
        question_id: qId,
        option_text: o.option_text || o.text,
        is_correct: o.is_correct,
        option_order: idx + 1
      }));

      await fetch(`${url}/rest/v1/question_options`, {
        method: 'POST',
        headers: {
          'apikey': key,
          'Authorization': 'Bearer ' + key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(opts)
      });
      count++;
    }
  }

  console.log(`Successfully seeded ${count} authentic questions for Architectural Engineering!`);
}

seed().catch(err => console.error('Seed error:', err));
