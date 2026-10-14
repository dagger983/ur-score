const fs = require('fs');

const path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const content = fs.readFileSync(path, 'utf8');

// Find all occurrences of "d:\" or "path" or svg definitions in HXv7
const regex = /<path[^>]*>/g;
let m;
let count = 0;
while ((m = regex.exec(content)) !== null) {
  count++;
  if (count <= 10) console.log(m[0].slice(0, 100));
}
console.log('Total path elements in HXv7:', count);

// Also search for "svg"
const svgMatches = content.match(/svg/gi) || [];
console.log('svg keyword count in HXv7:', svgMatches.length);
