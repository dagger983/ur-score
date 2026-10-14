const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Find all elements with data-framer-name="Desktop Base" or Desktop or Phone
const regex = /<[^>]*data-framer-name="([^"]*(Phone|Base|Mockup)[^"]*)"[^>]*>/gi;
let m;
while ((m = regex.exec(fHtml)) !== null) {
  const start = Math.max(0, m.index - 200);
  console.log('--- Found:', m[1], '---');
  console.log(fHtml.slice(start, m.index + m[0].length));
}
