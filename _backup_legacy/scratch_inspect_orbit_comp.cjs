const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const bfvujIdx = txt.indexOf('"framer-BfVuj"');
// Find where yr component ends
const yrIdx = txt.indexOf('yr=B(function', bfvujIdx);
const nextComp = txt.indexOf('function', yrIdx + 15);
console.log('Orbit component length:', nextComp - yrIdx);

// Look for data-framer-name within the orbit component
const compCode = txt.slice(yrIdx, nextComp);
const names = [...compCode.matchAll(/"data-framer-name":"([^"]+)"/g)].map(m => m[1]);
console.log('Names in orbit component:', names);
