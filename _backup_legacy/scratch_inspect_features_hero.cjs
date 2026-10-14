const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const desc = 'From real-time score tracking to personalized AI insights';
const idx = html.indexOf(desc);
console.log('Features hero snippet around description:');
console.log(html.slice(Math.max(0, idx - 1200), idx + 200));
