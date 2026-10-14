const fs = require('fs');
const h = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const matches = [...h.matchAll(/class="[^"]*(?:framer-z3pJ7|framer-19xlp0i|framer-k0biff)[^"]*"/g)];
for (const m of matches) {
  console.log('Match:', m[0]);
}

// Check how many phone images or mockups are in download.html
const imgMatches = [...h.matchAll(/<img[^>]+>/g)];
console.log('\nImages in download.html:');
for (const m of imgMatches) {
  if (m[0].includes('phone') || m[0].includes('screen') || m[0].includes('mockup') || m[0].includes('png')) {
    console.log(m[0].slice(0, 150));
  }
}
