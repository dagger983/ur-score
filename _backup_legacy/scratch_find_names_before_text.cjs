const fs = require('fs');

const content = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const idx = content.indexOf('Clever AI Insights.');
const chunk = content.slice(Math.max(0, idx - 6000), idx + 200);

// Find all data-framer-name in chunk
const names = [...chunk.matchAll(/data-framer-name="([^"]+)"/g)];
console.log('Names before Clever AI:', names.map(m => m[1]));

// Also print the 1000 characters right before the text container
const textIdx = chunk.indexOf('data-framer-name="Text"');
if (textIdx !== -1) {
  console.log('\nBefore Text:');
  console.log(chunk.slice(textIdx - 1200, textIdx));
}
