const fs = require('fs');
const h = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const sIdx = h.indexOf('class="framer-9mengb"');
console.log(h.slice(sIdx - 100, sIdx + 400));
