const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const idx = html.indexOf('framer-112cift-container');
console.log('Surrounding HTML of framer-112cift-container:');
console.log(html.substring(idx - 250, idx + 400));
