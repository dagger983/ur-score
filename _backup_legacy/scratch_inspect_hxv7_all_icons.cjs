const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const regex = /"data-framer-name":"([^"]+)"[\s\S]*?svg:'([^']+)'/g;
let m;
while ((m = regex.exec(txt)) !== null) {
  if (m[1].includes('Icon') || m[1].includes('Logo') || m[1].includes('Grok') || m[1].includes('AI') || m[1].includes('Logomark')) {
    console.log(`Icon: "${m[1]}" - SVG length: ${m[2].length}`);
    console.log('SVG snippet:', m[2].slice(0, 150));
    console.log('---');
  }
}
