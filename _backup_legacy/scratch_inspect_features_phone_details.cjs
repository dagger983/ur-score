const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features/index.html', 'utf8');

// Search for sticky in features
const stickyMatches = fHtml.match(/sticky/g) || [];
console.log('Features sticky count:', stickyMatches.length);

// Search for Phone or Mockup in features
const phoneMatches = [];
const regex = /<[^>]*data-framer-name="[^"]*(Phone|Card|Screen|Orbit|Mockup)[^"]*"[^>]*>/gi;
let m;
while ((m = regex.exec(fHtml)) !== null) {
  phoneMatches.push(m[0].slice(0, 100));
}
console.log('Features Phone/Card matches:', phoneMatches);
