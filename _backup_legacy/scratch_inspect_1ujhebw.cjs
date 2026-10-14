const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const start = html.indexOf('<div class="framer-1ujhebw"');
const end = html.indexOf('</div></div></div></div>', start);
console.log('framer-1ujhebw length:', end - start);
console.log(html.slice(start, start + 3000));
