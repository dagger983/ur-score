const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const regex = /\.framer-kS4Cs[^{]*\{[^}]*\}/g;
let match;
while ((match = regex.exec(html)) !== null) {
  if (match[0].includes('height') || match[0].includes('overflow') || match[0].includes('display') || match[0].includes('position')) {
    console.log(match[0]);
  }
}
