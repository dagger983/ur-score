const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/company.html', 'utf8');

const matches = html.match(/<h[1-6][^>]*>.*?<\/h[1-6]>|<p[^>]*>.*?<\/p>/gs) || [];
console.log('HTML headings & p tags in company:');
for (const m of matches) {
  const clean = m.replace(/<[^>]+>/g, '').trim();
  if (clean.length > 3 && clean.length < 150) {
    console.log('-', clean);
  }
}
