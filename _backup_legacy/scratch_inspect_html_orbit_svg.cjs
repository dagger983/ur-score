const fs = require('fs');

for (const p of ['index.html', 'features.html']) {
  const html = fs.readFileSync('payer_clone/payer.framer.website/' + p, 'utf8');
  const idx = html.indexOf('framer-1x6bsw4');
  console.log(`=== ${p} framer-1x6bsw4 (idx: ${idx}) ===`);
  if (idx !== -1) {
    console.log(html.slice(idx - 100, idx + 400));
  }
}
