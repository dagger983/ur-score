const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Find all svgs with width="54" and height="54"
const regex = /<svg\s+width="54"\s+height="54"[^>]*id="([^"]+)"/g;
let m;
while ((m = regex.exec(fHtml)) !== null) {
  console.log('54x54 SVG ID:', m[1]);
}
