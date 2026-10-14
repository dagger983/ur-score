const fs = require('fs');

console.log('=== Applying AI Simulation Widget ===');

// 1. The Widget HTML
const aiSimWidgetHtml = `<div class="sim-header">
  <div class="sim-ai-pill">
    <svg viewBox="0 0 24 24"><path d="M12 2L14.2 8.5C14.5 9.4 15.2 10.1 16.1 10.4L22.6 12.6L16.1 14.8C15.2 15.1 14.5 15.8 14.2 16.7L12 23.2L9.8 16.7C9.5 15.8 8.8 15.1 7.9 14.8L1.4 12.6L7.9 10.4C8.8 10.1 9.5 9.4 9.8 8.5L12 2Z"/></svg>
    Simulating: Pay ₹18k Card Dues
  </div>
  <div class="sim-live-tag">
    <div class="sim-pulse-dot"></div>
    AI Forecast
  </div>
</div>

<div class="sim-metric-row">
  <div class="sim-score-group">
    <span class="sim-curr-score">742</span>
    <span class="sim-arrow">→</span>
    <span class="sim-proj-score">780</span>
  </div>
  <div class="sim-gain-badge">
    +38 PTS ↗
  </div>
</div>

<div class="sim-chart-wrap">
  <svg class="sim-chart-svg" viewBox="0 0 340 70" preserveAspectRatio="none">
    <defs>
      <linearGradient id="sim-g-curve" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
        <stop offset="70%" stop-color="#38bdf8" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="sim-g-stroke" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#64748b" stop-opacity="0.4"/>
        <stop offset="35%" stop-color="#38bdf8" stop-opacity="0.8"/>
        <stop offset="80%" stop-color="#10b981" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#34d399"/>
      </linearGradient>
      <filter id="sim-f-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    <line x1="0" y1="60" x2="340" y2="60" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
    <line x1="0" y1="35" x2="340" y2="35" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
    <line x1="0" y1="10" x2="340" y2="10" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
    <path d="M 0 58 C 60 56, 110 48, 170 35 C 230 22, 275 14, 335 10 L 335 70 L 0 70 Z" fill="url(#sim-g-curve)"/>
    <path d="M 0 58 C 60 56, 110 48, 170 35 C 230 22, 275 14, 335 10" fill="none" stroke="url(#sim-g-stroke)" stroke-width="3" stroke-linecap="round" filter="url(#sim-f-glow)"/>
    <circle cx="335" cy="10" r="5" fill="#34d399" stroke="#ffffff" stroke-width="2"/>
    <circle cx="335" cy="10" r="9" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.6"/>
  </svg>
</div>

<div class="sim-insight-chip">
  <div class="sim-bulb-icon">
    <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h-4v1z"/></svg>
  </div>
  <p class="sim-insight-text">
    <strong>Clever Tip:</strong> Drops credit utilization to <strong>11%</strong>. Projected in <strong>45 days</strong> with 0 hard pull impact.
  </p>
</div>`;

// 2. The CSS rules
const aiSimWidgetCss = `
/* AI Credit Simulator & Forecast Widget */
.ai-sim-widget {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 265px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.05) 0%, rgba(15, 23, 42, 0.55) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 16px 18px;
  box-sizing: border-box;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.14), 0 16px 36px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  user-select: none;
}

.ai-sim-widget::before {
  content: "";
  position: absolute;
  top: -30px;
  right: -30px;
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(16, 185, 129, 0.08) 60%, transparent 80%);
  border-radius: 50%;
  pointer-events: none;
}

.sim-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
}

.sim-ai-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 11.5px;
  font-weight: 600;
  color: #38bdf8;
  letter-spacing: 0.15px;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.15);
}

.sim-ai-pill svg {
  width: 12px;
  height: 12px;
  fill: #38bdf8;
}

.sim-live-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: #34d399;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 4px 9px;
  border-radius: 100px;
}

.sim-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: simPulse 2s infinite ease-in-out;
}

@keyframes simPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.sim-metric-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 4px;
  position: relative;
  z-index: 2;
}

.sim-score-group {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.sim-curr-score {
  font-size: 20px;
  font-weight: 600;
  color: #64748b;
  text-decoration: line-through;
  text-decoration-color: rgba(100, 116, 139, 0.6);
}

.sim-arrow {
  color: #94a3b8;
  font-size: 15px;
}

.sim-proj-score {
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #ffffff 40%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.sim-gain-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.1) 100%);
  border: 1px solid rgba(16, 185, 129, 0.45);
  padding: 4px 9px;
  border-radius: 8px;
  font-size: 12.5px;
  font-weight: 700;
  color: #34d399;
  box-shadow: 0 0 14px rgba(16, 185, 129, 0.2);
}

.sim-chart-wrap {
  position: relative;
  width: 100%;
  height: 68px;
  margin: 2px 0;
  z-index: 1;
}

.sim-chart-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.sim-insight-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 11px;
  padding: 8px 12px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}

.sim-bulb-icon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.4);
}

.sim-bulb-icon svg {
  width: 13px;
  height: 13px;
  fill: #ffffff;
}

.sim-insight-text {
  font-size: 11.5px;
  color: #cbd5e1;
  line-height: 1.35;
  margin: 0;
}

.sim-insight-text strong {
  color: #f8fafc;
  font-weight: 600;
}

@media (max-width: 809px) {
  .ai-sim-widget {
    max-height: 240px;
    padding: 12px 14px;
  }
  .sim-ai-pill {
    font-size: 10.5px;
    padding: 3px 8px;
  }
  .sim-live-tag {
    font-size: 10px;
    padding: 3px 7px;
  }
  .sim-curr-score {
    font-size: 18px;
  }
  .sim-proj-score {
    font-size: 26px;
  }
  .sim-gain-badge {
    font-size: 11.5px;
    padding: 3px 7px;
  }
  .sim-chart-wrap {
    height: 56px;
  }
  .sim-insight-chip {
    padding: 6px 10px;
    gap: 8px;
  }
  .sim-bulb-icon {
    width: 20px;
    height: 20px;
  }
  .sim-insight-text {
    font-size: 10.5px;
  }
}
`;

// 3. Update features.html & features/index.html
const featureFiles = [
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/features/index.html'
];

for (const ff of featureFiles) {
  if (!fs.existsSync(ff)) continue;
  let html = fs.readFileSync(ff, 'utf8');

  // Inject or update <style id="ai-sim-widget-style">
  if (html.includes('id="ai-sim-widget-style"')) {
    html = html.replace(/<style id="ai-sim-widget-style">[\s\S]*?<\/style>/, `<style id="ai-sim-widget-style">${aiSimWidgetCss}</style>`);
  } else {
    html = html.replace('</head>', `<style id="ai-sim-widget-style">${aiSimWidgetCss}</style></head>`);
  }

  // Replace content of framer-tgs7m5
  const gStartTag = 'class="framer-tgs7m5" data-framer-name="Graphics">';
  const gIdx = html.indexOf(gStartTag);
  const textStartTag = '<div class="framer-vlnoe0" data-framer-name="Text">';
  const tIdx = html.indexOf(textStartTag, gIdx);

  if (gIdx !== -1 && tIdx !== -1) {
    const newGraphicsContent = `${gStartTag}<div class="ssr-variant hidden-1p4okdx hidden-1rvucs8"><div class="framer-sk3hgp-container"><div class="ai-sim-widget">${aiSimWidgetHtml}</div></div></div><div class="ssr-variant hidden-19m6io8 hidden-1rvucs8"><div class="framer-sk3hgp-container"><div class="ai-sim-widget">${aiSimWidgetHtml}</div></div></div><div class="ssr-variant hidden-1p4okdx hidden-19m6io8"><div class="framer-sk3hgp-container"><div class="ai-sim-widget">${aiSimWidgetHtml}</div></div></div></div>`;
    
    html = html.slice(0, gIdx) + newGraphicsContent + html.slice(tIdx);
    console.log('Updated graphics container in', ff);
  } else {
    console.warn('Could not find markers in', ff, { gIdx, tIdx });
  }

  fs.writeFileSync(ff, html, 'utf8');
}

// 4. Update Framer JS component: HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs
const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
if (fs.existsSync(hxv7Path)) {
  let js = fs.readFileSync(hxv7Path, 'utf8');

  // Replace yr function with simplified renderer
  const yrMarker = ',yr=B(';
  const yrIdx = js.indexOf(yrMarker);
  const grMarker = ',gr=[';
  const grIdx = js.indexOf(grMarker, yrIdx);
  const grEndMarker = '],xe=L(yr,gr';
  const grEndIdx = js.indexOf(grEndMarker, grIdx);

  if (yrIdx !== -1 && grIdx !== -1 && grEndIdx !== -1) {
    const escapedHtml = JSON.stringify(aiSimWidgetHtml);
    const newYr = `,yr=B(function(o,n){return e("div",{ref:n,className:"ai-sim-widget",style:{width:"100%",height:"100%",...o?.style},dangerouslySetInnerHTML:{__html:${escapedHtml}}})})`;
    const escapedCss = JSON.stringify(aiSimWidgetCss.replace(/\s+/g, ' '));
    const newGr = `,gr=[${escapedCss}`;
    
    js = js.slice(0, yrIdx) + newYr + newGr + js.slice(grEndIdx);
    console.log('Successfully replaced yr and gr in HXv7!');
    fs.writeFileSync(hxv7Path, js, 'utf8');
  } else {
    console.warn('Could not find markers in HXv7', { yrIdx, grIdx, grEndIdx });
  }
}

console.log('=== All updates applied successfully! ===');
