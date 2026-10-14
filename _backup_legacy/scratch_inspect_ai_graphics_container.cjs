const fs = require('fs');

const content = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const idx = content.indexOf('Clever AI Insights.');
const chunk = content.slice(idx - 3000, idx);
const gIdx = chunk.lastIndexOf('data-framer-name="Graphics"');
console.log('Graphics chunk:');
console.log(chunk.slice(gIdx, gIdx + 1200));

const cardIdx = chunk.lastIndexOf('data-framer-name="Card"');
console.log('\nCard chunk start:');
console.log(chunk.slice(cardIdx, cardIdx + 400));
