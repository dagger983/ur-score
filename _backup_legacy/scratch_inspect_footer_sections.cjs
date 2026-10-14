const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const fIdx = html.indexOf('<footer');
const fEnd = html.indexOf('</footer>', fIdx) + 9;
const f = html.substring(fIdx, fEnd);

console.log('Footer structure:');
// Print all direct children or main sections
const sections = f.match(/<div[^>]*data-framer-name="[^"]*"[^>]*>/g) || [];
sections.forEach(s => console.log(s));
