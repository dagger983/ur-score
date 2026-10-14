const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

// Find all occurrences of framer-ymqvgx in download.html
let pos = 0;
while ((pos = html.indexOf('framer-ymqvgx', pos)) !== -1) {
  console.log('Pos:', pos);
  console.log(html.substring(Math.max(0, pos - 50), Math.min(html.length, pos + 150)));
  pos += 'framer-ymqvgx'.length;
}
