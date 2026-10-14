const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const idx = fHtml.indexOf('AI Integrations.');
console.log('Index:', idx);
if (idx !== -1) {
  // Find the entire card containing AI Integrations
  const cardStart = fHtml.lastIndexOf('<div class="framer-', idx - 400);
  console.log('--- SURROUNDING HTML ---');
  console.log(fHtml.slice(idx - 600, idx + 400));
}
