const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const start = 175497;
console.log('--- START OF 3gVIi ---');
console.log(html.slice(start, start + 800));

// Let's find where data-framer-root or main is!
const mainIdx = html.indexOf('<main');
console.log('Main is at:', mainIdx);
console.log('Is main inside 3gVIi?', mainIdx > start);
