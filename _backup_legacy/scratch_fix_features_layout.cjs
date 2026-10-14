const fs = require('fs');

console.log('=== Updating features.html Hero & Layout ===');
let fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Remove old injected styles
fHtml = fHtml.replace(/<style id="ur-features-perfect-style">[\s\S]*?<\/style>/g, '');
fHtml = fHtml.replace(/<style id="ur-features-hero-override">[\s\S]*?<\/style>/g, '');
fHtml = fHtml.replace(/<style id="ur-features-orbit-override">[\s\S]*?<\/style>/g, '');

const perfectFeaturesStyle = `
<style id="ur-features-perfect-style">
/* Clean Base Layout */
html, body, #main {
  background-color: #000000 !important;
}

.framer-DlyyI .framer-18krjv0 {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  transform: none !important;
  width: 100% !important;
  background-color: #000000 !important;
  z-index: 2 !important;
}

/* Features Hero Section Alignment & Cohesion */
.framer-DlyyI .framer-1bnx6p {
  height: 480px !important;
  max-height: 480px !important;
  min-height: 480px !important;
  position: relative !important;
  overflow: hidden !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
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

.framer-DlyyI .framer-807x45-container {
  position: absolute !important;
  top: 40% !important;
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
    height: 420px !important;
    max-height: 420px !important;
    min-height: 420px !important;
  }
  .framer-DlyyI .framer-807x45-container {
    top: 36% !important;
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

/* Position Footer at bottom in normal flow */
.framer-112cift-container {
  position: relative !important;
  top: auto !important;
  left: auto !important;
  transform: none !important;
  z-index: 2 !important;
  width: 100% !important;
}

.framer-li12gk {
  display: none !important;
}
</style>
`;

fHtml = fHtml.replace('</head>', perfectFeaturesStyle + '</head>');
fs.writeFileSync('payer_clone/payer.framer.website/features.html', fHtml, 'utf8');
console.log('Saved updated features.html');
