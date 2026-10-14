const fs = require('fs');

const fHtmlPath = 'payer_clone/payer.framer.website/features.html';
let html = fs.readFileSync(fHtmlPath, 'utf8');

// Update CSS
const orbitCss = `
<style id="ur-orbit-center-override">
.framer-BfVuj .framer-1i9pyl1 {
  align-content: center !important;
  align-items: center !important;
  display: flex !important;
  flex: none !important;
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  gap: 0px !important;
  height: 92px !important;
  width: 92px !important;
  justify-content: center !important;
  overflow: visible !important;
  padding: 0px !important;
  position: relative !important;
  border-radius: 50% !important;
  background: transparent !important;
  border: none !important;
  z-index: 10 !important;
}
.framer-BfVuj .framer-1i9pyl1 .framer-1x6bsw4 {
  width: 92px !important;
  height: 92px !important;
  filter: drop-shadow(0 0 25px rgba(0, 220, 255, 0.9)) !important;
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

if (html.includes('id="ur-orbit-center-override"')) {
  html = html.replace(/<style id="ur-orbit-center-override">[\s\S]*?<\/style>/, orbitCss);
} else {
  html = html.replace('</head>', orbitCss + '</head>');
}

// Update card title & copy in features.html
html = html.replace(/>AI Credit Companion\.</g, '>AI Integrations.<');
html = html.replace(
  /Powered by ChatGPT, Claude, Gemini &amp; Grok\. Ask any question about your score and get instant, personalized credit improvement simulations\./g,
  'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
);
html = html.replace(
  /Powered by ChatGPT, Claude, Gemini & Grok\. Ask any question about your score and get instant, personalized credit improvement simulations\./g,
  'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
);

fs.writeFileSync(fHtmlPath, html, 'utf8');
console.log('Successfully updated features.html orbit CSS and text!');
