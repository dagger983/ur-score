const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const yxzpduIdx = html.indexOf('class="framer-yxzpdu"');
console.log('Snippet of yxzpdu:');
console.log(html.slice(yxzpduIdx, yxzpduIdx + 1200));
