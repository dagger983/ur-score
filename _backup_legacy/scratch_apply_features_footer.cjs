const fs = require('fs');

const files = [
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/features/index.html'
];

const attachedFooterCss = `
<style id="ur-attached-footer-fix">
/* Root container flows naturally */
.framer-3gVIi {
  min-height: 100vh !important;
  height: auto !important;
  display: flex !important;
  flex-direction: column !important;
  position: relative !important;
  overflow-x: hidden !important;
}

/* 1. Eliminate Framer's dummy reveal placeholder and flex spacers */
.framer-li12gk,
.framer-1ukkchr,
[data-framer-name="Footer Visibility Placeholder"],
#template-overlay {
  display: none !important;
  height: 0px !important;
  min-height: 0px !important;
  max-height: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
  border: 0 !important;
  opacity: 0 !important;
  pointer-events: none !important;
  flex: none !important;
  flex-grow: 0 !important;
}

/* 2. Footer Container: Normal document flow at bottom of page (no fixed/scroll-over) */
.framer-3gVIi .framer-112cift-container,
.framer-112cift-container {
  position: relative !important;
  top: auto !important;
  bottom: auto !important;
  left: auto !important;
  right: auto !important;
  transform: none !important;
  width: 100% !important;
  height: auto !important;
  min-height: auto !important;
  max-height: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: #050505 !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  z-index: 10 !important;
  overflow: visible !important;
  flex: none !important;
  order: 1003 !important;
}

/* 3. Footer Element */
.framer-3gVIi .framer-112cift-container footer,
footer.framer-kS4Cs {
  position: relative !important;
  width: 100% !important;
  max-width: 1200px !important;
  height: auto !important;
  min-height: auto !important;
  max-height: none !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: flex-start !important;
  overflow: visible !important;
  background-color: transparent !important;
  margin: 0 auto !important;
  padding: 0 !important;
}

/* 4. Footer Content Container */
footer.framer-kS4Cs .framer-1k3aauy {
  width: 100% !important;
  height: auto !important;
  min-height: auto !important;
  max-height: none !important;
  flex: none !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 40px !important;
  padding: 64px 32px 32px !important;
  overflow: visible !important;
  justify-content: flex-start !important;
  align-items: stretch !important;
}

/* Company + Links row */
footer.framer-kS4Cs .framer-1w3c4xg {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: flex-start !important;
  width: 100% !important;
  height: auto !important;
  overflow: visible !important;
  gap: 48px !important;
}

footer.framer-kS4Cs .framer-w9tsm8 {
  max-width: 440px !important;
  width: 100% !important;
  flex: 1 1 320px !important;
  height: auto !important;
  overflow: visible !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 16px !important;
}

footer.framer-kS4Cs .framer-k4pvw3 {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-end !important;
  gap: 12px !important;
  height: auto !important;
  width: auto !important;
  flex: none !important;
  overflow: visible !important;
}

/* Legal / Copyright row */
footer.framer-kS4Cs .framer-4i09f3 {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
  width: 100% !important;
  height: auto !important;
  padding-top: 24px !important;
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  overflow: visible !important;
}

footer.framer-kS4Cs .framer-oa5rgk {
  width: auto !important;
  height: auto !important;
  flex: none !important;
}

/* Marquee / Giant Watermark at bottom */
footer.framer-kS4Cs .framer-l9ivoo-container {
  width: 100% !important;
  height: 90px !important;
  overflow: hidden !important;
  position: relative !important;
  margin-top: 10px !important;
  opacity: 0.25 !important;
}

/* Responsive adjustments for mobile (< 810px) */
@media (max-width: 809px) {
  footer.framer-kS4Cs.framer-v-1avw4kc.framer-1bsm1vk {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    min-height: auto !important;
    height: auto !important;
  }
  footer.framer-kS4Cs .framer-1k3aauy {
    padding: 40px 20px 24px !important;
    gap: 32px !important;
  }
  footer.framer-kS4Cs .framer-1w3c4xg {
    flex-direction: column !important;
    gap: 32px !important;
  }
  footer.framer-kS4Cs .framer-k4pvw3 {
    align-items: flex-start !important;
    width: 100% !important;
  }
  footer.framer-kS4Cs .framer-4i09f3 {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 12px !important;
  }
}
</style>
`;

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('id="ur-attached-footer-fix"')) {
    content = content.replace(/<style id="ur-attached-footer-fix">[\s\S]*?<\/style>/, attachedFooterCss);
  } else if (content.includes('id="ur-clean-attached-footer"')) {
    content = content.replace(/<style id="ur-clean-attached-footer">[\s\S]*?<\/style>/, attachedFooterCss);
  } else {
    content = content.replace('</head>', attachedFooterCss + '</head>');
  }
  fs.writeFileSync(f, content, 'utf8');
  console.log('Applied attached footer CSS to:', f);
}
