const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const regex = /data-framer-name="([^"]*)"[^>]*>[\s\S]{0,500}qrBJWrcCXUJQR9uUYBR4gaot7g\.png/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('Parent framer name near iPhone:', m[1]);
}
