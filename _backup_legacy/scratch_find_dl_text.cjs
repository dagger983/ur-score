const fs = require('fs');
let html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');
const idx = html.indexOf('framer-6psn6j');
if (idx !== -1) {
  const nextDiv = html.indexOf('<div class="framer-6psn6j"', idx);
  console.log('Markup for framer-6psn6j:', html.slice(nextDiv, nextDiv + 500));
}
