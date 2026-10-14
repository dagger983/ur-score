const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

let p = 0;
while ((p = html.indexOf('Payment Screen', p)) !== -1) {
  console.log(`Payment Screen at ${p}:`);
  console.log(html.slice(p - 60, p + 250));
  console.log('---');
  p += 14;
}
