const fs = require('fs');

const pages = [
  'payer_clone/payer.framer.website/index.html',
  'payer_clone/payer.framer.website/download.html',
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/company.html',
  'payer_clone/payer.framer.website/support.html'
];

for (const p of pages) {
  const html = fs.readFileSync(p, 'utf8');
  console.log(`${p}: has 32px nav logo style:`, html.includes('.framer-tq51ue, .framer-11evgwc, .framer-1uho7c7'));
}
