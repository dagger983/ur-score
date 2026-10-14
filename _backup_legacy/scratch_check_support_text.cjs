const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/support.html', 'utf8');
const mjs = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs', 'utf8');

const matches = html.match(/<h[1-6][^>]*>.*?<\/h[1-6]>|<p[^>]*>.*?<\/p>/gs) || [];
console.log('HTML headings & p tags in support:');
for (const m of matches) {
  const clean = m.replace(/<[^>]+>/g, '').trim();
  if (clean.length > 3 && clean.length < 120) {
    console.log('-', clean);
  }
}
