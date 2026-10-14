const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const start = html.indexOf('class="framer-tgs7m5"');
const end = html.indexOf('class="framer-vlnoe0"');
console.log('framer-tgs7m5 span:', start, end, 'length:', end - start);
console.log('START SNIPPET:');
console.log(html.slice(start, start + 400));
console.log('\nEND SNIPPET:');
console.log(html.slice(end - 300, end));
