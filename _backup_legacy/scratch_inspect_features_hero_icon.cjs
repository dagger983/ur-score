const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const desc = 'From real-time score tracking';
const dIdx = txt.indexOf(desc);

// Find elements right before desc
console.log(txt.slice(Math.max(0, dIdx - 3000), dIdx));
