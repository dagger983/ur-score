const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const lIdx = html.indexOf('data-framer-name="Legal"');
console.log('Legal HTML snippet:');
console.log(html.substring(lIdx - 50, lIdx + 1500));
