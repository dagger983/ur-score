const fs = require('fs');

const path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const content = fs.readFileSync(path, 'utf8');

// Search for the 5 satellite nodes
for (const term of ['Clandestine', 'BuildingBlocks', 'ContrastAI', 'Boltshift', 'Eclipseful', 'App Icon']) {
  let idx = content.indexOf(term);
  console.log(term, 'at index:', idx);
  if (idx !== -1) {
    console.log(content.slice(Math.max(0, idx - 100), idx + 200));
  }
}
