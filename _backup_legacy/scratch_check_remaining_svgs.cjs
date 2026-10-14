const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

for (const id of ['svg-1880125910_4413', 'svg736774121_4629']) {
  const match = fHtml.match(new RegExp('<svg[^>]*id="[^"]*' + id + '[^"]*"[\\s\\S]*?<\\/svg>'));
  if (match) {
    console.log('=== SVG', id, '===');
    console.log(match[0].slice(0, 300));
  }
}
