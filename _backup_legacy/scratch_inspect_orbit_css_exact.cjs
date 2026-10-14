const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const cssStart = txt.indexOf('css:[');
const cssEnd = txt.indexOf(']', cssStart);
const cssChunk = txt.slice(cssStart, cssEnd);

const regexes = [
  /\.framer-1i9pyl1[^{]*\{[^}]*\}/g,
  /\.framer-jowe18[^{]*\{[^}]*\}/g,
  /\.framer-1f9z2qh[^{]*\{[^}]*\}/g,
  /\.framer-prpkl9[^{]*\{[^}]*\}/g,
  /\.framer-1x6bsw4[^{]*\{[^}]*\}/g,
  /\.framer-u67xta[^{]*\{[^}]*\}/g,
  /\.framer-axlbm9[^{]*\{[^}]*\}/g
];

for (const r of regexes) {
  const m = cssChunk.match(r);
  if (m) console.log(m.join('\n'));
}
