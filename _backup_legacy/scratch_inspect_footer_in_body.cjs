const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const bodyIdx = html.indexOf('<body');
const idx = html.indexOf('framer-112cift-container', bodyIdx);
console.log('In body, surrounding HTML of framer-112cift-container:');
console.log(html.substring(idx - 350, idx + 400));
