const fs = require('fs');
const h = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const p = h.indexOf('Company + Links');
console.log('Parent of Company + Links:');
console.log(h.slice(p - 800, p));
