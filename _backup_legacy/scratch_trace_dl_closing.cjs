const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const screenStart = html.indexOf('class="framer-19xlp0i"');
const nextSection = html.indexOf('</section>', screenStart);

// Let's print from index 122000 to nextSection
console.log('End of download section:');
console.log(html.slice(nextSection - 800, nextSection + 15));
