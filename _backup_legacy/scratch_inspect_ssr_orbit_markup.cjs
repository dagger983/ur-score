const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const fIdx = fHtml.indexOf('framer-BfVuj');
console.log('features.html framer-BfVuj index:', fIdx);
if (fIdx !== -1) {
  console.log(fHtml.slice(fIdx, fIdx + 2500));
}
