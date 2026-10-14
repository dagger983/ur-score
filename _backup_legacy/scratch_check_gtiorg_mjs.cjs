const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const mjs = fs.readFileSync(mjsFile, 'utf8');

// Check status bar colors in mjs
console.log('mjs includes 9:41:', mjs.includes('9:41'));
const match941 = mjs.match(/.{0,100}9:41.{0,100}/);
console.log('9:41 snippet:', match941 ? match941[0] : 'not found');
