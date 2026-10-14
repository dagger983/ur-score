const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const s1 = html.indexOf('data-framer-name="Start Screen"');
const s2 = html.indexOf('data-framer-name="Home Screen"');
const s3 = html.indexOf('data-framer-name="Payment Screen"');

console.log('Start Screen length:', s2 - s1);
console.log('Home Screen length:', s3 - s2);
console.log('Payment Screen snippet:');
console.log(html.slice(s3, s3 + 800));
