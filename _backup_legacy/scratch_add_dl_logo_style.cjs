const fs = require('fs');

const dlHtmlPath = 'payer_clone/payer.framer.website/download.html';
let html = fs.readFileSync(dlHtmlPath, 'utf8');

const navLogoStyle = `
<style>
.framer-tq51ue, .framer-11evgwc, .framer-1uho7c7 {
  aspect-ratio: 1 / 1 !important;
  width: 32px !important;
  height: 32px !important;
  image-rendering: auto !important;
}
.framer-tq51ue svg, .framer-11evgwc svg, .framer-1uho7c7 svg {
  image-rendering: auto !important;
}
</style>
`;

if (!html.includes('.framer-tq51ue, .framer-11evgwc, .framer-1uho7c7')) {
  html = html.replace('</head>', navLogoStyle + '</head>');
  fs.writeFileSync(dlHtmlPath, html, 'utf8');
  console.log('Successfully injected nav logo style into download.html!');
} else {
  console.log('nav logo style already exists in download.html');
}
