const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const icons = ['Logomark (2)', 'Eclipseful', 'Boltshift', 'Clandestine', 'BuildingBlocks', 'ContrastAI'];
for (const icon of icons) {
  const idx = txt.indexOf(`"data-framer-name":"${icon}"`);
  console.log(`=== ${icon} at ${idx} ===`);
  const svgStart = txt.indexOf("svg:'", idx);
  const svgEnd = txt.indexOf("'", svgStart + 5);
  console.log('svg length:', svgEnd - svgStart);
  console.log('svg preview:', txt.slice(svgStart, Math.min(svgEnd, svgStart + 120)));
}
