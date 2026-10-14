const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const regex = /sticky/g;
let count = 0;
let m;
while ((m = regex.exec(html)) !== null) {
  count++;
  console.log('Sticky at', m.index, ':', html.slice(Math.max(0, m.index - 80), m.index + 80));
}
console.log('Total sticky occurrences:', count);
