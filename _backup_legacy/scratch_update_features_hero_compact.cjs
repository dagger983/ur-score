const fs = require('fs');

const fHtmlPath = 'payer_clone/payer.framer.website/features.html';
let html = fs.readFileSync(fHtmlPath, 'utf8');

const heroFixCss = `
<style id="ur-features-hero-fix">
/* Features Hero Section Alignment & Cohesion */
.framer-DlyyI .framer-1bnx6p {
  height: 480px !important;
  max-height: 480px !important;
  min-height: 480px !important;
  padding: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
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

.framer-DlyyI .framer-14rpyf7 {
  position: relative !important;
  bottom: auto !important;
  left: auto !important;
  transform: none !important;
  max-width: 580px !important;
  margin-top: 120px !important;
  z-index: 10 !important;
  text-align: center !important;
}

.framer-DlyyI .framer-14rpyf7 p {
  font-size: 16px !important;
  line-height: 1.5 !important;
  color: rgba(255, 255, 255, 0.75) !important;
  text-align: center !important;
}

@media (max-width: 809px) {
  .framer-DlyyI .framer-1bnx6p {
    height: 440px !important;
    max-height: 440px !important;
    min-height: 440px !important;
  }
  .framer-DlyyI .framer-1no5ctm {
    height: 100% !important;
    max-height: 440px !important;
  }
  .framer-DlyyI .framer-14rpyf7 {
    max-width: 90% !important;
    margin-top: 110px !important;
  }
}
</style>
`;

if (html.includes('id="ur-features-hero-fix"')) {
  html = html.replace(/<style id="ur-features-hero-fix">[\s\S]*?<\/style>/, heroFixCss);
} else {
  html = html.replace('</head>', heroFixCss + '</head>');
}

fs.writeFileSync(fHtmlPath, html, 'utf8');
console.log('Successfully updated features.html hero styles!');
