const fs = require('fs');
const content = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
for (const id of ['svg-1880125910_4413', 'svg736774121_4629']) {
  const re = new RegExp('<svg[^>]*id="' + id + '"[\\s\\S]*?<\\/svg>');
  const m = content.match(re);
  console.log(id, m ? m[0] : 'not found');
}
