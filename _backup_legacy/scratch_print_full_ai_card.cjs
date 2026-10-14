const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const idx = fHtml.indexOf('AI Integrations.');
// Find enclosing card
const cardStart = fHtml.lastIndexOf('<div class="framer-knnqq3"', idx);
console.log('cardStart:', cardStart);
// Let's print from cardStart to idx + 500
console.log(fHtml.slice(cardStart, idx + 500));
