const fs = require('fs');

const pages = [
  'payer_clone/payer.framer.website/index.html',
  'payer_clone/payer.framer.website/download.html',
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/company.html',
  'payer_clone/payer.framer.website/support.html'
];

for (const p of pages) {
  const content = fs.readFileSync(p, 'utf8');
  console.log(`=== ${p} ===`);
  console.log('Has svg-2139612630_280:', content.includes('svg-2139612630_280'));
  console.log('Has ur_score_logo.png:', content.includes('ur_score_logo.png'));
  console.log('Has 40 48 viewBox:', content.includes('viewBox="0 0 40 48"'));
}
