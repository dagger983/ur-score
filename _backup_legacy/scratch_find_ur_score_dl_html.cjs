const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const matches = [];
let idx = 0;
while ((idx = html.indexOf('UR SCORE', idx)) !== null) {
  if (idx === -1) break;
  matches.push({ idx, snippet: html.slice(Math.max(0, idx - 50), idx + 50) });
  idx += 8;
}
console.log('Occurrences of UR SCORE in download.html:');
matches.forEach(m => console.log(m.idx, '-->', m.snippet));
