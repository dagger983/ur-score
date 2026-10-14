const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');
const start = html.indexOf('class="framer-19xlp0i"');
const nextSection = html.indexOf('</section>', start);
console.log('Next section at:', nextSection, 'Distance:', nextSection - start);
console.log('--- Context between 19xlp0i and next section ---');
console.log(html.slice(start, nextSection + 10));
