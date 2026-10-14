const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');
const idx = html.indexOf('data-framer-name="Screen"');
console.log('Screen found at:', idx);
if (idx !== -1) {
  console.log(html.slice(idx, idx + 1800));
}
