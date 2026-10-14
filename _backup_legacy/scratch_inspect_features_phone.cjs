const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const pIdx = fHtml.indexOf('data-framer-name="Phone"');
console.log('Phone in features.html:', pIdx);
if (pIdx !== -1) {
  console.log(fHtml.slice(pIdx - 150, pIdx + 300));
}
