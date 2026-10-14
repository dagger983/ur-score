const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Find styles for framer-1bnx6p (Hero) and framer-14rpyf7
const r = /\.framer-[a-zA-Z0-9_-]+\s*\{[^}]*framer-1bnx6p[^}]*\}/g;
console.log('Hero CSS:');
const idx = html.indexOf('.framer-1bnx6p');
console.log(html.slice(idx - 50, idx + 400));

const idxText = html.indexOf('.framer-14rpyf7');
console.log('Text CSS:');
console.log(html.slice(idxText - 50, idxText + 400));
