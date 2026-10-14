const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

for (const cls of ['framer-1xxpzb', 'framer-c5emsp', 'framer-1ou80h3']) {
  const regex = new RegExp('\\.' + cls + '\\b[^{]*\\{[^}]*\\}', 'g');
  let m;
  while ((m = regex.exec(html)) !== null) {
    console.log(cls, ':', m[0]);
  }
}
