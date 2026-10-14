const fs = require('fs');

const pages = [
  'index.html',
  'features.html',
  'download.html',
  'company.html',
  'support.html'
];

for (const p of pages) {
  const content = fs.readFileSync('payer_clone/payer.framer.website/' + p, 'utf8');
  console.log('===', p, '===');
  // Check for phone, mockup, iphone, screen
  const matches = content.match(/data-framer-name="[^"]*(Phone|Mockup|Screen|Mobile|Device)[^"]*"/gi) || [];
  console.log('Matches:', [...new Set(matches)]);
}
