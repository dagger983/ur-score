const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features/index.html', 'utf8');

const idx = fHtml.indexOf('data-framer-name="Phone"');
console.log('Index:', idx);
if (idx !== -1) {
  // Let's find all occurrences of Phone in features
  let pos = 0;
  while ((pos = fHtml.indexOf('data-framer-name="Phone"', pos)) !== -1) {
    console.log('--- Phone match at', pos, '---');
    console.log(fHtml.slice(Math.max(0, pos - 200), pos + 400));
    pos += 20;
  }
}
