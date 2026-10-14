const fs = require('fs');

const h = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');
const bodyIdx = h.indexOf('<body');

let idx = bodyIdx;
while ((idx = h.indexOf('<footer', idx + 1)) !== -1) {
  console.log('Footer in download.html at:', idx);
  console.log(h.substring(idx - 150, idx + 150));
}
