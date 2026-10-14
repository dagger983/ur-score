const fs = require('fs');

const indexHtmlPath = 'payer_clone/payer.framer.website/index.html';
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const orbitCenterCss = `
<style>
.framer-BfVuj .framer-1i9pyl1 {
  width: 96px !important;
  height: 96px !important;
  padding: 0 !important;
  border-radius: 50% !important;
  background: radial-gradient(circle, rgba(20, 24, 38, 0.95) 0%, rgba(10, 14, 26, 0.98) 100%) !important;
  border: 2px solid rgba(59, 130, 246, 0.5) !important;
  box-shadow: 0 0 35px rgba(37, 99, 235, 0.55), inset 0 0 15px rgba(59, 130, 246, 0.3) !important;
  overflow: visible !important;
  z-index: 10 !important;
}
.framer-BfVuj .framer-1i9pyl1 .framer-1x6bsw4 {
  width: 82px !important;
  height: 82px !important;
}
</style>
`;

if (!html.includes('.framer-BfVuj .framer-1i9pyl1')) {
  html = html.replace('</head>', orbitCenterCss + '</head>');
  fs.writeFileSync(indexHtmlPath, html, 'utf8');
  console.log('Successfully injected orbit center CSS into index.html!');
} else {
  console.log('orbit center CSS already exists in index.html');
}
