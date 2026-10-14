const fs = require('fs');

const fMjs = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const txt = fs.readFileSync(fMjs, 'utf8');

// Check media queries in HXv7
const mqs = txt.match(/@media[^{]+\{[^}]+\}/g) || [];
console.log('Media queries in HXv7 (count ' + mqs.length + '):');
mqs.slice(0, 10).forEach(q => console.log('-', q));

// Check breakpoints
const bp = txt.match(/breakpoint:[a-zA-Z0-9_]+/g) || [];
console.log('Breakpoints in HXv7:', Array.from(new Set(bp)));
