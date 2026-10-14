const fs = require('fs');
const home = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const idx = 685678;
console.log(home.slice(Math.max(0, idx - 400), idx + 800));
