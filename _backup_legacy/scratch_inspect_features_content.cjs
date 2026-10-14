const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

// Find all headings or text strings
const headings = txt.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/g) || [];
console.log('Headings in HXv7:');
console.log(headings.map(h => h.replace(/<[^>]+>/g, '').trim()));

// Also check for specific phrases
for (const p of ['transfers', 'pay', 'Features', 'integrat', 'AI']) {
  let count = 0, pos = 0;
  while ((pos = txt.indexOf(p, pos)) !== -1) {
    count++;
    pos += p.length;
  }
  console.log(`Occurrences of "${p}":`, count);
}
