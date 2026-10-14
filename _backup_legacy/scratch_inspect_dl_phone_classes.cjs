const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

for (const cls of ['framer-yxzpdu', 'framer-lm4fet', 'framer-19xlp0i']) {
  console.log(`\n=== CSS for ${cls} ===`);
  const regex = new RegExp(`\\.framer-[^\\{]*${cls}[^\\{]*\\{([^\\}]+)\\}`, 'g');
  let m;
  while ((m = regex.exec(html)) !== null) {
    console.log(m[0]);
  }
}
