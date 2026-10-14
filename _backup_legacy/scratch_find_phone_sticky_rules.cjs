const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const phoneIdx = html.indexOf('Apple iPhone 16 Pro Natural Titanium');
console.log('Phone at:', phoneIdx);
if (phoneIdx !== -1) {
  // Find the parents and classes of this phone element
  console.log(html.slice(Math.max(0, phoneIdx - 600), phoneIdx + 300));
}
