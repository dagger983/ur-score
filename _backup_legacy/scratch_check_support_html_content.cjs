const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/support.html', 'utf8');

const regex = /<p class="framer-text[^>]*>([\s\S]*?)<\/p>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  const clean = m[1].replace(/<[^>]+>/g, '').trim();
  if (clean.length > 0 && !clean.includes('{') && !clean.includes('rgb')) {
    console.log('-', clean);
  }
}
