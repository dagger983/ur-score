const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const startIdx = html.indexOf('data-framer-name="Apple iPhone 16 Pro Natural Titanium"');
const endIdx = html.indexOf('data-framer-name="Feature 1"', startIdx);
console.log('Hero Phone length in HTML:', endIdx - startIdx);
console.log('Hero Phone first 3000 chars:');
console.log(html.slice(startIdx, startIdx + 3000));
