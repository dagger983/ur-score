const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

console.log('File size:', txt.length);
const idx = txt.indexOf('Logomark');
console.log('Logomark context:', txt.slice(Math.max(0, idx - 100), idx + 800));

const svgIdx = txt.indexOf('2139612630');
console.log('2139612630 context:', txt.slice(Math.max(0, svgIdx - 100), svgIdx + 800));
