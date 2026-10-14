const fs = require('fs');
const js = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const idx = js.indexOf('displayName="Features/Integration"');
console.log(js.slice(idx - 12000, idx - 6000));




