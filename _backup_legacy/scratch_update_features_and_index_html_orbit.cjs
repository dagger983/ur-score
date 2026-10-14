const fs = require('fs');

const fHtmlPath = 'payer_clone/payer.framer.website/features.html';
const idxHtmlPath = 'payer_clone/payer.framer.website/index.html';

let fHtml = fs.readFileSync(fHtmlPath, 'utf8');
let idxHtml = fs.readFileSync(idxHtmlPath, 'utf8');

// Copy replacements in features.html
fHtml = fHtml.replace(/>AI Integrations\.</g, '>AI Credit Companion.<');
fHtml = fHtml.replace(
  /Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice\./g,
  'Powered by ChatGPT, Claude, Gemini & Grok. Ask any question about your score and get instant, personalized credit improvement simulations.'
);

const orbitStyles = `
<style id="ur-orbit-center-override">
.framer-BfVuj .framer-1i9pyl1 {
  align-content: center !important;
  align-items: center !important;
  display: flex !important;
  flex: none !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  gap: 0px !important;
  height: 96px !important;
  width: 96px !important;
  justify-content: center !important;
  overflow: visible !important;
  padding: 0px !important;
  position: relative !important;
  border-radius: 50% !important;
  background: radial-gradient(circle at 35% 30%, #38bdf8 0%, #1d4ed8 45%, #0f172a 100%) !important;
  border: 2.5px solid #00d4ff !important;
  box-shadow: 0 0 35px rgba(0, 212, 255, 0.85), 0 0 60px rgba(37, 99, 235, 0.5), inset 0 0 15px rgba(56, 189, 248, 0.4) !important;
  z-index: 10 !important;
}
.framer-BfVuj .framer-1i9pyl1 .framer-1x6bsw4 {
  width: 78px !important;
  height: 78px !important;
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.9)) !important;
}
@media (max-width: 809px) {
  .framer-BfVuj.framer-axlbm9 {
    width: 100% !important;
    max-width: 340px !important;
    transform: scale(0.82) !important;
    transform-origin: center center !important;
    margin: 0 auto !important;
  }
}
</style>
`;

if (fHtml.includes('id="ur-orbit-center-override"')) {
  fHtml = fHtml.replace(/<style id="ur-orbit-center-override">[\s\S]*?<\/style>/, orbitStyles);
} else {
  fHtml = fHtml.replace('</head>', orbitStyles + '</head>');
}

if (idxHtml.includes('id="ur-orbit-center-override"')) {
  idxHtml = idxHtml.replace(/<style id="ur-orbit-center-override">[\s\S]*?<\/style>/, orbitStyles);
} else {
  idxHtml = idxHtml.replace('</head>', orbitStyles + '</head>');
}

fs.writeFileSync(fHtmlPath, fHtml, 'utf8');
fs.writeFileSync(idxHtmlPath, idxHtml, 'utf8');

console.log('Successfully updated orbit styles in features.html and index.html!');
