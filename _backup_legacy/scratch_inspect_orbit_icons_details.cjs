const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const appNames = ['Eclipseful', 'Boltshift', 'Clandestine', 'BuildingBlocks', 'ContrastAI', 'Security Icon'];
for (const name of appNames) {
  let idx = txt.indexOf(`"data-framer-name":"${name}"`);
  console.log(`=== ${name} (idx: ${idx}) ===`);
  if (idx !== -1) {
    console.log(txt.substring(idx - 100, idx + 350));
  }
}
