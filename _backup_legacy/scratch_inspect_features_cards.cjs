const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const regex = /<p[^>]*class="framer-text[^"]*"[^>]*>([\s\S]*?)<\/p>/g;
let m;
const set = new Set();
while ((m = regex.exec(html)) !== null) {
  const t = m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (t.length > 15 && t.length < 180 && !set.has(t)) {
    set.add(t);
    console.log('-', t);
  }
}
