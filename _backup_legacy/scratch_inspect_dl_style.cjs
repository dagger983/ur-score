const fs = require('fs');

const h = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');
const sIdx = h.indexOf('id="ur-dl-perfect-style"');
const eIdx = h.indexOf('</style>', sIdx);
console.log(h.substring(sIdx, eIdx));
