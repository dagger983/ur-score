const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const phoneIdx = html.indexOf('data-framer-name="Apple iPhone 16 Pro Natural Titanium"');
const sectionIdx = html.lastIndexOf('<section', phoneIdx);
console.log('Section index:', sectionIdx);
console.log(html.slice(sectionIdx, sectionIdx + 400));
