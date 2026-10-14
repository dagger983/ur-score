const fs = require('fs');

console.log('=== Step 2: Updating features.html ===');
let fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Replace any previous custom injected styles with our clean, unified styles
// Remove old injected styles
fHtml = fHtml.replace(/<style id="ur-features-hero-override">[\s\S]*?<\/style>/g, '');
fHtml = fHtml.replace(/<style id="ur-features-orbit-override">[\s\S]*?<\/style>/g, '');

const perfectFeaturesStyle = `
<style id="ur-features-perfect-style">
/* Features Hero Section Alignment & Cohesion */
.framer-DlyyI .framer-1bnx6p {
  height: 480px !important;
  max-height: 480px !important;
  min-height: 480px !important;
  position: relative !important;
  overflow: hidden !important;
}

.framer-DlyyI .framer-1no5ctm {
  height: 100% !important;
  max-height: 480px !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  pointer-events: none !important;
}

.framer-DlyyI .framer-18krjv0 {
  position: absolute !important;
  top: 42% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 5 !important;
}

.framer-DlyyI .framer-14rpyf7 {
  position: absolute !important;
  bottom: 36px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  max-width: 580px !important;
  width: 90% !important;
  margin: 0 !important;
  z-index: 10 !important;
  text-align: center !important;
}

.framer-DlyyI .framer-14rpyf7 p {
  font-size: 16px !important;
  line-height: 1.5 !important;
  color: rgba(255, 255, 255, 0.7) !important;
}

@media (max-width: 809px) {
  .framer-DlyyI .framer-1bnx6p {
    height: 440px !important;
    max-height: 440px !important;
    min-height: 440px !important;
  }
  .framer-DlyyI .framer-18krjv0 {
    top: 38% !important;
  }
  .framer-DlyyI .framer-14rpyf7 {
    bottom: 24px !important;
    max-width: 340px !important;
  }
  .framer-DlyyI .framer-14rpyf7 p {
    font-size: 14px !important;
    line-height: 1.4 !important;
  }
}

/* AI Orbit Component Layout & Node Positioning */
.framer-BfVuj .framer-jowe18 {
  width: 90px !important;
  height: 90px !important;
  left: calc(50% - 45px) !important;
  top: calc(50% - 45px) !important;
  border-radius: 50% !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 10 !important;
  overflow: visible !important;
}

.framer-BfVuj .framer-jowe18 .framer-u67xta {
  width: 90px !important;
  height: 90px !important;
}

.framer-BfVuj .framer-1i9pyl1 {
  width: 68px !important;
  height: 68px !important;
  border-radius: 1e4px !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: linear-gradient(180deg, rgb(30, 30, 30) 0%, rgb(18, 18, 18) 100%) !important;
  border: 2px solid rgba(255, 255, 255, 0.15) !important;
  box-shadow: none !important;
  z-index: 5 !important;
}

.framer-BfVuj .framer-1i9pyl1 .framer-1x6bsw4 {
  width: 54px !important;
  height: 54px !important;
  filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.7)) !important;
}

@media (max-width: 809px) {
  .framer-BfVuj.framer-axlbm9 {
    width: 100% !important;
    max-width: 340px !important;
    transform: scale(0.85) !important;
    transform-origin: center center !important;
    margin: 0 auto !important;
  }
}
</style>
`;

// Also clean up any earlier injected styles in style 3 or 4 if present
fHtml = fHtml.replace(/\/\* Features Hero Section Alignment & Cohesion \*\/[\s\S]*?\.framer-DlyyI \.framer-14rpyf7 p \{[\s\S]*?\}/, '');
fHtml = fHtml.replace(/\.framer-BfVuj \.framer-1i9pyl1 \{[\s\S]*?margin: 0 auto !important;\s*\}/, '');

// Inject perfect style
fHtml = fHtml.replace('</head>', perfectFeaturesStyle + '</head>');

// Also update SSR strings in features.html
fHtml = fHtml.replace(/>\$212,003</g, '>785<');
fHtml = fHtml.replace(/>This month</g, '>Credit Score<');
fHtml = fHtml.replace(/>18% past 30 days</g, '>+28 pts past 30 days<');
fHtml = fHtml.replace(/>\$179,664</g, '>757<');
fHtml = fHtml.replace(/>Last month</g, '>Previous Cycle<');
fHtml = fHtml.replace(/>\$21,003</g, '>100%<');
fHtml = fHtml.replace(/>Meera Haria</g, '>Payment History<');
fHtml = fHtml.replace(/>India</g, '>On-Time<');
fHtml = fHtml.replace(/>\$15,000</g, '>18%<');
fHtml = fHtml.replace(/>Luv Raghuvanshi</g, '>Credit Utilization<');
fHtml = fHtml.replace(/>Germany</g, '>Optimal<');

fHtml = fHtml.replace(/>AI Credit Companion\.</g, '>AI Integrations.<');
fHtml = fHtml.replace(
  /Powered by ChatGPT, Claude, Gemini &amp; Grok\. Ask any question about your score and get instant, personalized credit improvement simulations\./g,
  'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
);
fHtml = fHtml.replace(
  /Powered by ChatGPT, Claude, Gemini & Grok\. Ask any question about your score and get instant, personalized credit improvement simulations\./g,
  'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
);

fs.writeFileSync('payer_clone/payer.framer.website/features.html', fHtml, 'utf8');
console.log('Saved updated features.html');


console.log('\n=== Step 3: Updating download.html ===');
let dlHtml = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

// Replace any broken or offset styles
dlHtml = dlHtml.replace(/<style id="ur-dl-perfect-style">[\s\S]*?<\/style>/g, '');

const perfectDlStyle = `
<style id="ur-dl-perfect-style">
/* Clean Single Centered Phone Mockup */
.framer-z3pJ7 .framer-yxzpdu {
  top: 76% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) perspective(1200px) rotateX(15deg) !important;
}

[data-framer-name="Screen"], .framer-19xlp0i {
  position: absolute !important;
  left: calc(50% - 98% / 2) !important;
  top: calc(50% - 98.55% / 2) !important;
  width: 98% !important;
  height: 99% !important;
  background: radial-gradient(circle at 50% 34%, #1e293b 0%, #0a0f1d 70%, #020617 100%) !important;
  background-image: none !important;
  border-radius: 24px !important;
  padding: 0 !important;
  overflow: hidden !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
}

[data-framer-name="Screen"] .framer-ymqvgx, .framer-19xlp0i .framer-ymqvgx {
  background-color: transparent !important;
  position: absolute !important;
  top: 0 !important;
  left: 50% !important;
  transform: translate(-50%) !important;
  width: 100% !important;
  padding: 8px 16px 0 28px !important;
  z-index: 10 !important;
}

[data-framer-name="Screen"] .framer-ymqvgx .framer-text, .framer-19xlp0i .framer-ymqvgx .framer-text {
  --framer-text-color: #ffffff !important;
  color: #ffffff !important;
}

[data-framer-name="Screen"] .framer-ymqvgx svg path,
[data-framer-name="Screen"] .framer-ymqvgx svg rect,
.framer-19xlp0i .framer-ymqvgx svg path,
.framer-19xlp0i .framer-ymqvgx svg rect {
  fill: #ffffff !important;
  stroke: #ffffff !important;
}

@media (max-width: 809px) {
  .framer-z3pJ7 .framer-yxzpdu {
    top: 76% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) perspective(1200px) rotateX(15deg) scale(0.9) !important;
  }
}
</style>
`;

// Remove the old style 4 containing -140px
dlHtml = dlHtml.replace(/\.framer-z3pJ7 \.framer-yxzpdu \{[\s\S]*?translate\(calc\(-50% - 140px\)[\s\S]*?\}/g, '');

dlHtml = dlHtml.replace('</head>', perfectDlStyle + '</head>');
fs.writeFileSync('payer_clone/payer.framer.website/download.html', dlHtml, 'utf8');
console.log('Saved updated download.html');
