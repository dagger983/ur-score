const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const regex = /data-framer-name="Apple iPhone 16 Pro Natural Titanium"/g;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null) {
  count++;
  console.log(`\n=== Phone #${count} at ${m.index} ===`);
  const chunk = html.slice(m.index, m.index + 2500);
  // check what images or background images are in this chunk
  const bg = chunk.match(/background-image:[^;]+/g);
  const imgs = chunk.match(/<img[^>]+src="([^">]+)"/g);
  const framerNames = chunk.match(/data-framer-name="([^"]+)"/g);
  console.log('Backgrounds:', bg);
  console.log('Images:', imgs);
  console.log('Framer names:', framerNames ? framerNames.slice(0, 10) : []);
}
