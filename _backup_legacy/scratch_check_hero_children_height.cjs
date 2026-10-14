const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Find framer-1no5ctm
const regex = /\.framer-DlyyI[^{]*\.framer-1no5ctm[^{]*\{([^}]+)\}/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[0]);
}
