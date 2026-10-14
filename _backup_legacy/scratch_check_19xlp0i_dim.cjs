const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

// Find all CSS rules for framer-19xlp0i and its parent
const r = /\.framer-[a-zA-Z0-9_-]+\s*\{[^}]*framer-19xlp0i[^}]*\}/g;
console.log('CSS rules mentioning 19xlp0i:');
let m;
const cssIdx = html.indexOf('.framer-19xlp0i');
console.log(html.slice(cssIdx - 150, cssIdx + 300));

// Also let's check parent of framer-19xlp0i in HTML DOM
const domIdx = html.indexOf('class="framer-19xlp0i"');
console.log('DOM structure around 19xlp0i:');
console.log(html.slice(domIdx - 300, domIdx + 300));
