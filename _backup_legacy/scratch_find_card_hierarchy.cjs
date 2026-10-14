const fs = require('fs');

const content = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const idx = content.indexOf('Clever AI Insights.');
const chunk = content.slice(Math.max(0, idx - 8000), idx);

// Search backwards for framer-knnqq3 or similar card class
const cardStart = chunk.lastIndexOf('class="framer-');
console.log('Cards before text:');
let pos = idx;
for (let i = 0; i < 15; i++) {
  pos = content.lastIndexOf('<div class="framer-', pos - 1);
  const end = content.indexOf('>', pos);
  console.log(content.slice(pos, end + 1));
  if (content.slice(pos, end + 1).includes('data-border="true"')) {
    console.log('Found data-border element at', pos);
  }
}
