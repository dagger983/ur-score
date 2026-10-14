const fs = require('fs');
const content = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');
const start = content.indexOf('id="svg568813755_2777"');
const end = content.indexOf('</svg>', start);
console.log('SVG content:');
console.log(content.substring(start - 50, end + 6));
