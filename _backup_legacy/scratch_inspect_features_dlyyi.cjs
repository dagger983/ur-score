const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const regex = /\.framer-DlyyI\s*\{([^}]+)\}/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[0]);
}
