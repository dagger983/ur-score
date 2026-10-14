const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const idx = html.indexOf('svg-2139612630_280');
console.log('Navbar logo HTML in index.html:');
console.log(html.slice(Math.max(0, idx - 300), idx + 300));
