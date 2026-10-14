const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/support.html', 'utf8');

const questions = [
  'How long do transfers take?',
  'What is the maximum amount I can send at once?',
  'Is my money secure with UR Score?',
  'Is my money secure with UR SCORE?',
  'Are there any fees for sending money?',
  'How can I resolve an issue with my transaction?'
];

for (const q of questions) {
  console.log(`Contains "${q}":`, html.includes(q));
}
