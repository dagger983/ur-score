const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const start = 327000;
console.log(fHtml.slice(start, start + 3000));
