const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
// Let's inspect index.html for framer-BfVuj
const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');
console.log('index.html contains framer-BfVuj:', html.includes('framer-BfVuj'));

const featuresHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
console.log('features.html contains framer-BfVuj:', featuresHtml.includes('framer-BfVuj'));
