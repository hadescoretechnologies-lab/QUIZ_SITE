const fs = require('fs');
const path = require('path');

const qbFile = path.resolve(__dirname, '../../frontend/src/services/questionBank.ts');
const content = fs.readFileSync(qbFile, 'utf8');

// Extract DOMAIN_QUESTIONS and ALIAS_MAP from frontend
// We can test the exact resolution logic
const aliasMatch = content.match(/export const ALIAS_MAP: Record<string, string> = (\{[\s\S]*?\n\})/);
const ALIAS_MAP = eval('(' + aliasMatch[1] + ')');

const testSlugs = [
  'chemical-engineering',
  'civil-engineering',
  'mechanical-engineering',
  'architectural-engineering',
  'aerospace-engineering',
  'electrical-engineering',
  'computer-science',
  'python',
  'web-development',
  'others',
  'custom-topic'
];

console.log('Testing ALIAS_MAP resolution:');
for (const s of testSlugs) {
  console.log(`Slug "${s}" -> ALIAS_MAP: "${ALIAS_MAP[s]}"`);
}
