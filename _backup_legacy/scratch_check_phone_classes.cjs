const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const idx = html.indexOf('Haley Baylee');
let pos = idx;
for (let i = 0; i < 15; i++) {
  pos = html.lastIndexOf('<div', pos - 1);
  const tagEnd = html.indexOf('>', pos);
  console.log(`Parent ${i}:`, html.slice(pos, tagEnd + 1));
}
