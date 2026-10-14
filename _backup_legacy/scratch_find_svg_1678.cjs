const fs = require('fs');
const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const idx = fHtml.indexOf('svg-1678641818_1075');
console.log('Index:', idx);
if (idx !== -1) {
  console.log(fHtml.slice(idx - 50, idx + 300));
}
