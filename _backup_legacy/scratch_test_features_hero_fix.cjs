const fs = require('fs');

const fHtmlPath = 'payer_clone/payer.framer.website/features.html';
let html = fs.readFileSync(fHtmlPath, 'utf8');

// 1. In features.html, adjust the hero CSS:
const heroFixCss = `
<style id="ur-features-hero-fix">
/* Features Hero Section Alignment & Cohesion */
.framer-DlyyI .framer-1bnx6p {
  height: auto !important;
  min-height: 540px !important;
  padding: 130px 24px 60px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  overflow: visible !important;
}

.framer-DlyyI .framer-14rpyf7 {
  position: relative !important;
  bottom: auto !important;
  left: auto !important;
  transform: none !important;
  max-width: 580px !important;
  margin-top: 14px !important;
  z-index: 5 !important;
  text-align: center !important;
}

.framer-DlyyI .framer-14rpyf7 p {
  font-size: 17px !important;
  line-height: 1.5 !important;
  color: rgba(255, 255, 255, 0.7) !important;
  text-align: center !important;
}

.ur-features-hero-title {
  font-family: 'Inter Display', Inter, sans-serif;
  font-size: clamp(32px, 5vw, 54px);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-align: center;
  margin: 24px 0 0 0;
  z-index: 5;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.75) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 809px) {
  .framer-DlyyI .framer-1bnx6p {
    min-height: 480px !important;
    padding: 100px 20px 40px !important;
  }
  .ur-features-hero-title {
    font-size: 32px !important;
    margin-top: 18px !important;
  }
  .framer-DlyyI .framer-14rpyf7 {
    max-width: 100% !important;
    width: 90% !important;
  }
}
</style>
`;

if (html.includes('id="ur-features-hero-fix"')) {
  html = html.replace(/<style id="ur-features-hero-fix">[\s\S]*?<\/style>/, heroFixCss);
} else {
  html = html.replace('</head>', heroFixCss + '</head>');
}

// 2. Add the hero title right before framer-14rpyf7 in features.html
const textContainerIdx = html.indexOf('class="framer-14rpyf7"');
if (textContainerIdx !== -1 && !html.includes('ur-features-hero-title')) {
  const insertPos = html.lastIndexOf('<div class="framer-14rpyf7"', textContainerIdx);
  const titleHtml = '<h1 class="ur-features-hero-title">Intelligent Credit Features.</h1>';
  html = html.slice(0, insertPos) + titleHtml + html.slice(insertPos);
  console.log('Injected hero title into features.html');
}

fs.writeFileSync(fHtmlPath, html, 'utf8');
console.log('Successfully updated features.html hero styles!');
