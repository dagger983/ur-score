const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const regex = /<[^>]*class="[^"]*framer-3gVIi[^"]*"[^>]*>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('Match at', m.index, ':', m[0].slice(0, 150));
}
