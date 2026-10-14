const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const linesIdx = html.indexOf('data-framer-name="Lines"');
console.log('Before lines:');
console.log(html.slice(linesIdx - 1000, linesIdx));
