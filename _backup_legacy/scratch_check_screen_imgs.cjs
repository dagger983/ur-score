const fs = require('fs');

const indexHtml = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');
const dlHtml = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

console.log('--- Images in index.html ---');
const imgs1 = indexHtml.match(/(?:enhanced_screen_\d|mockup_\d)[^"'\s)]*/g) || [];
console.log('index.html screen images:', [...new Set(imgs1)]);

console.log('--- Images in download.html ---');
const imgs2 = dlHtml.match(/(?:enhanced_screen_\d|mockup_\d)[^"'\s)]*/g) || [];
console.log('download.html screen images:', [...new Set(imgs2)]);
