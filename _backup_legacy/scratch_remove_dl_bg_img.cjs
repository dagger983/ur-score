const fs = require('fs');
let html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const targetStr = "background-image: url('../framerusercontent.com/images/ur_score_splash_screen_dark.png') !important;";
const replStr = "background: radial-gradient(circle at 50% 34%, #1e293b 0%, #0a0f1d 70%, #020617 100%) !important;\n  background-image: none !important;";

if (html.includes(targetStr)) {
  html = html.replace(targetStr, replStr);
  fs.writeFileSync('payer_clone/payer.framer.website/download.html', html, 'utf8');
  console.log('Successfully replaced background-image with sleek radial gradient in download.html');
} else {
  console.log('Target string not found');
}
