const fs = require('fs');
const h = fs.readFileSync('scratch_live_dl_dom.html', 'utf8');

const start = h.indexOf('id="customers"');
console.log('Section id="customers" (4000 chars):');
console.log(h.slice(start - 200, start + 3000));
