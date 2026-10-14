const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

console.log('--- Inside Hero Phone Frame ---');
console.log(html.slice(173800, 178000));
