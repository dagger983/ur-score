const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const regex = /<p[^>]*class="[^"]*framer-styles-preset-[^"]*"[^>]*>.*?<\/p>/gs;
const matches = html.match(regex) || [];
console.log('Number of p tags:', matches.length);
for (const p of matches) {
  const clean = p.replace(/<[^>]+>/g, '').trim();
  if (clean.length > 5 && clean.length < 150) {
    console.log('P:', clean);
  }
}
