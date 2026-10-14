const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

let idx = 0;
while ((idx = html.indexOf('DlyyI', idx)) !== -1) {
  console.log(html.slice(Math.max(0, idx - 40), idx + 120));
  idx += 5;
}
