const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const regex = /<section\s+class="([^"]+)"[^>]*>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('Section class:', m[1]);
}
