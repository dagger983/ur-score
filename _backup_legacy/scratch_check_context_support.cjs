const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/support.html', 'utf8');

const idx = html.indexOf('How long do transfers take?');
console.log(html.slice(idx - 100, idx + 400));
