const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features/index.html', 'utf8');

// Find all sections or main children in features
const sectionMatches = fHtml.match(/<section[^>]*class="([^"]+)"[^>]*data-framer-name="([^"]+)"/g) || [];
console.log('Sections:', sectionMatches);

// Find elements with data-framer-name
const allNamed = [];
const regex = /data-framer-name="([^"]+)"/g;
let m;
while ((m = regex.exec(fHtml)) !== null) {
  if (!allNamed.includes(m[1])) allNamed.push(m[1]);
}
console.log('All named components:', allNamed);
