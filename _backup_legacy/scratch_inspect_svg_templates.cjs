const fs = require('fs');
const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const idx = fHtml.indexOf('id="svg-templates"');
console.log('svg-templates index:', idx);
if (idx !== -1) {
  console.log(fHtml.slice(idx, idx + 1000));
}
