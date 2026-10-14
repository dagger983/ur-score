const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const heroIdx = txt.indexOf('"framer-1bnx6p"');
console.log('framer-1bnx6p index in HXv7:', heroIdx);
console.log(txt.slice(heroIdx, heroIdx + 2500));
