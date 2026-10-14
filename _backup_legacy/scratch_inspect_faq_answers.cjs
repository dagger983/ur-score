const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs', 'utf8');

const questions = [
  'How long do transfers take?',
  'What is the maximum amount I can send at once?',
  'Is my money secure with UR SCORE?',
  'Are there any fees for sending money?',
  'How can I resolve an issue with my transaction?'
];

for (const q of questions) {
  const idx = txt.indexOf(q);
  console.log(`\n=== Question: ${q} (at ${idx}) ===`);
  console.log(txt.slice(idx - 100, idx + 600));
}
