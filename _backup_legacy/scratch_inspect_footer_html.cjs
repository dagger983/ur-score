const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const fIdx = html.indexOf('<footer');
const fEnd = html.indexOf('</footer>', fIdx);
console.log('Footer HTML length:', fEnd - fIdx);
console.log(html.substring(fIdx, fIdx + 2000));
