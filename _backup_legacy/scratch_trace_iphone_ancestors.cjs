const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const phoneIdx = html.indexOf('data-framer-name="Apple iPhone 16 Pro Natural Titanium"');
console.log(html.slice(Math.max(0, phoneIdx - 1500), phoneIdx));
