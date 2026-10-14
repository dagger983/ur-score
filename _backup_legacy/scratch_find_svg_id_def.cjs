const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const idx = fHtml.indexOf('id="svg562521627_4399"');
console.log('id="svg562521627_4399" at index:', idx);
if (idx !== -1) {
  console.log(fHtml.slice(idx - 50, idx + 200));
}
