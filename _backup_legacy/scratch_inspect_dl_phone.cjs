const fs = require('fs');
const dlHtml = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const idx = dlHtml.indexOf('data-framer-name="Phone Frame"');
console.log('download.html Phone Frame context:');
console.log(dlHtml.slice(idx, idx + 2000));
