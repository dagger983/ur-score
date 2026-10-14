const fs = require('fs');

const files = [
  'payer_clone/payer.framer.website/index.html',
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/download.html',
  'payer_clone/payer.framer.website/company.html',
  'payer_clone/payer.framer.website/support.html',
];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} ===`);
  const logos = content.match(/[^"'\s]*logo[^"'\s]*/gi) || [];
  const unique = Array.from(new Set(logos));
  console.log(unique);
}
