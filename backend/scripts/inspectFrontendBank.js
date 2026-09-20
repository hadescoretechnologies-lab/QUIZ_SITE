const fs = require('fs');
const path = require('path');

const qbFile = path.resolve(__dirname, '../../frontend/src/services/questionBank.ts');
const content = fs.readFileSync(qbFile, 'utf8');

const keys = [];
const lines = content.split('\n');
lines.forEach(l => {
  const m = l.match(/^\s*"([a-z0-9-]+)":\s*\[/);
  if (m && !keys.includes(m[1])) {
    keys.push(m[1]);
  }
});

console.log('KEYS IN FRONTEND DOMAIN_QUESTIONS:', keys);
