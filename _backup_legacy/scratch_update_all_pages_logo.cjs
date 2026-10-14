const fs = require('fs');
const path = require('path');

const cleanSymbol = `<svg width="40" height="40" viewBox="0 0 1024 1024" fill="none" id="svg-2139612630_280" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image width="1024" height="1024" x="0" y="0" href="/framerusercontent.com/images/ur_score_logo.png" preserveAspectRatio="xMidYMid meet" style="image-rendering:auto;-webkit-optimize-contrast"/></svg>`;
const symbolRegex = /<svg width="40" height="48" viewBox="0 0 40 48" fill="none" id="svg-2139612630_280"[^>]*>[\s\S]*?<\/svg>/;

const pages = [
  'payer_clone/payer.framer.website/company.html',
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/careers.html',
  'payer_clone/payer.framer.website/privacy-policy.html',
  'payer_clone/payer.framer.website/support.html',
  'payer_clone/payer.framer.website/terms-and-conditions.html',
  'payer_clone/payer.framer.website/careers/product-designer-ui-ux.html',
  'payer_clone/payer.framer.website/careers/senior-software-engineer.html'
];

for (const p of pages) {
  if (!fs.existsSync(p)) continue;
  let html = fs.readFileSync(p, 'utf8');
  let changed = false;

  if (symbolRegex.test(html)) {
    html = html.replace(symbolRegex, cleanSymbol);
    changed = true;
  }

  if (html.includes('viewBox="0 0 40 48"><use href="#svg-2139612630_280"')) {
    html = html.replace(/viewBox="0 0 40 48"><use href="#svg-2139612630_280"/g, 'viewBox="0 0 1024 1024"><use href="#svg-2139612630_280"');
    changed = true;
  }

  html = html.replace(/image-rendering:pixelated;flex-shrink:0;fill:black;color:black" class="framer-tq51ue/g, 'image-rendering:auto;flex-shrink:0;fill:black;color:black" class="framer-tq51ue');
  html = html.replace(/image-rendering:pixelated;flex-shrink:0;fill:black;color:black" class="framer-11evgwc/g, 'image-rendering:auto;flex-shrink:0;fill:black;color:black" class="framer-11evgwc');
  html = html.replace(/image-rendering:pixelated;flex-shrink:0;fill:black;color:black" class="framer-1uho7c7/g, 'image-rendering:auto;flex-shrink:0;fill:black;color:black" class="framer-1uho7c7');

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
    changed = true;
  }

  fs.writeFileSync(p, html, 'utf8');
  console.log(`Updated ${p}`);
}
console.log('All pages updated successfully!');
