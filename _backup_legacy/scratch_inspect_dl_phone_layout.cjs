const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');
const idx = html.indexOf('framer-19xlp0i');
console.log('Context before 19xlp0i:');
console.log(html.slice(idx - 600, idx));

const mjs = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs', 'utf8');
const sIdx = mjs.indexOf('"framer-19xlp0i"');
console.log('Screen in mjs:');
console.log(mjs.slice(sIdx - 100, sIdx + 700));
