const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const regex = /data-framer-name="Phone Frame"|data-framer-name="Apple iPhone 16 Pro Natural Titanium"/g;
let m;
let indices = [];
while ((m = regex.exec(html)) !== null) {
  indices.push({ name: m[0], index: m.index });
}
console.log('Found frames:', indices.length);
for (let item of indices) {
  // Find what section it's in by looking backward for data-framer-name="Section..." or similar
  const sliceBefore = html.slice(Math.max(0, item.index - 1500), item.index);
  const secMatch = sliceBefore.match(/data-framer-name="([^"]+)"/g);
  const lastSec = secMatch ? secMatch.slice(-3).join(' -> ') : 'none';
  console.log(item.name, 'at', item.index, 'Ancestors:', lastSec);
}
