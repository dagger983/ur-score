const fs = require('fs');
const h = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

let pos = h.lastIndexOf('framer-yxzpdu');
console.log('Last framer-yxzpdu at', pos, ':');
console.log(h.slice(pos - 100, pos + 3000));
