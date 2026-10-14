const fs = require('fs');

const dlHtml = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');
const idx = dlHtml.indexOf('/* UR Score Download Mockup');
if (idx !== -1) {
  console.log('Found override in download.html:');
  console.log(dlHtml.substring(idx, idx + 1200));
} else {
  console.log('Not found override in download.html');
}
