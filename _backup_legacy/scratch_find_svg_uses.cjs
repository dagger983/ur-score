const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Find all svg symbols or ids
const regex = /<use\s+href="([^"]+)"/g;
let m;
const uses = [];
while ((m = regex.exec(fHtml)) !== null) {
  if (!uses.includes(m[1])) uses.push(m[1]);
}
console.log('SVG uses in features.html:', uses);
