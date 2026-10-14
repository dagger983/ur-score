const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const regex = /children:\[e\("span",\{style:\{"--framer-text-color":"rgb\(250, 250, 250\)"\},children:"([^"]+)"\}\),"([^"]+)"\]/g;
let match;
while ((match = regex.exec(txt)) !== null) {
  console.log('Card:', match[1], '-->', match[2]);
}

// Also check for any other p / h2 / h3 texts
const textRegex = /children:"([^"]{15,150})"/g;
let m;
console.log('\nOther text snippets in features:');
while ((m = textRegex.exec(txt)) !== null) {
  if (!m[1].includes('<') && !m[1].includes('{') && !m[1].includes('rgb') && !m[1].includes('px')) {
    console.log('-', m[1]);
  }
}
