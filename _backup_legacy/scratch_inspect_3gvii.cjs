const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const mainIdx = html.indexOf('class="framer-3gVIi');
console.log('framer-3gVIi snippet:');
console.log(html.substring(mainIdx, mainIdx + 1200));

// Find all occurrences of order: in CSS
const orderMatches = html.match(/order:\s*[^;}]+/g);
console.log('Order matches in CSS:', [...new Set(orderMatches)]);
