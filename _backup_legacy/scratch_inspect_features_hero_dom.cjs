const fs = require('fs');
const h = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const p = h.lastIndexOf('hidden-1rvucs8');
console.log('Last hidden-1rvucs8 in body:');
console.log(h.slice(p, p + 2500));
