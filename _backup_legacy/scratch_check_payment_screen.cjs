const fs = require('fs');
const txt = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');
const idx = txt.indexOf('Payment Screen');
console.log('Payment screen at:', idx);
console.log(txt.slice(idx - 100, idx + 400));
