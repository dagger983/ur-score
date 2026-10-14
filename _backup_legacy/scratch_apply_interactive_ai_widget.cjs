const fs = require('fs');

console.log('=== Applying Interactive AI Simulation Widget ===');

// 1. The Interactive Widget HTML
const aiSimWidgetHtml = `<div class="sim-spotlight"></div>
<div class="sim-header">
  <div class="sim-pills-row">
    <button type="button" class="sim-tab-btn active" data-scenario="dues">
      <svg viewBox="0 0 24 24"><path d="M12 2L14.2 8.5C14.5 9.4 15.2 10.1 16.1 10.4L22.6 12.6L16.1 14.8C15.2 15.1 14.5 15.8 14.2 16.7L12 23.2L9.8 16.7C9.5 15.8 8.8 15.1 7.9 14.8L1.4 12.6L7.9 10.4C8.8 10.1 9.5 9.4 9.8 8.5L12 2Z"/></svg>
      Pay ₹18k
    </button>
    <button type="button" class="sim-tab-btn" data-scenario="emi">
      Clear Loan
    </button>
    <button type="button" class="sim-tab-btn" data-scenario="limit">
      Limit &lt; 15%
    </button>
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
  <div class="sim-scan-line"></div>
  <div class="sim-scan-tooltip">Day 45: 780 PTS</div>
  
  <svg class="sim-chart-svg" viewBox="0 0 340 68" preserveAspectRatio="none">
    <defs>
      <linearGradient id="sim-g-curve-live" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.38"/>
        <stop offset="70%" stop-color="#38bdf8" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="sim-g-stroke-live" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#64748b" stop-opacity="0.4"/>
        <stop offset="35%" stop-color="#38bdf8" stop-opacity="0.8"/>
        <stop offset="80%" stop-color="#10b981" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#34d399"/>
      </linearGradient>
      <filter id="sim-f-glow-live" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    
    <line x1="0" y1="58" x2="340" y2="58" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
    <line x1="0" y1="34" x2="340" y2="34" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
    <line x1="0" y1="10" x2="340" y2="10" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3 3"/>
    
    <path class="sim-path-area" d="M 0 56 C 60 54, 110 46, 170 33 C 230 20, 275 14, 335 10 L 335 68 L 0 68 Z" fill="url(#sim-g-curve-live)"/>
    <path class="sim-path-line" d="M 0 56 C 60 54, 110 46, 170 33 C 230 20, 275 14, 335 10" fill="none" stroke="url(#sim-g-stroke-live)" stroke-width="3" stroke-linecap="round" filter="url(#sim-f-glow-live)"/>
    <path class="sim-laser-pulse" d="M 0 56 C 60 54, 110 46, 170 33 C 230 20, 275 14, 335 10" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
    
    <circle class="milestone-ring" cx="335" cy="10" r="9" fill="none" stroke="#10b981" stroke-width="1.5"/>
    <circle class="milestone-dot" cx="335" cy="10" r="4.5" fill="#34d399" stroke="#ffffff" stroke-width="1.8"/>
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

// 2. The Interactive CSS rules
const aiSimWidgetCss = `
/* Interactive AI Credit Simulator & Forecast Widget */
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
  padding: 13px 16px;
  box-sizing: border-box;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.14), 0 16px 36px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  user-select: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.ai-sim-widget:hover {
  border-color: rgba(56, 189, 248, 0.3);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 20px 40px rgba(0, 0, 0, 0.55), 0 0 30px rgba(56, 189, 248, 0.08);
}

.sim-spotlight {
  position: absolute;
  top: -30px;
  right: -30px;
  width: 160px;
  height: 160px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(16, 185, 129, 0.1) 60%, transparent 80%);
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.15s ease-out, opacity 0.3s ease;
}

.sim-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;
}

.sim-pills-row {
  display: flex;
  gap: 5px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  padding: 3px;
}

.sim-tab-btn {
  background: transparent;
  border: 1px solid transparent;
  color: #94a3b8;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 100px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
  outline: none;
}

.sim-tab-btn:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.05);
}

.sim-tab-btn.active {
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.14);
  border-color: rgba(56, 189, 248, 0.35);
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.25);
}

.sim-tab-btn svg {
  width: 11px;
  height: 11px;
  fill: currentColor;
}

.sim-live-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10.5px;
  font-weight: 600;
  color: #34d399;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 4px 8px;
  border-radius: 100px;
}

.sim-pulse-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: simPulse 2s infinite ease-in-out;
}

@keyframes simPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.8); }
}

.sim-metric-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 2px;
  position: relative;
  z-index: 5;
}

.sim-score-group {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.sim-curr-score {
  font-size: 19px;
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
  transition: all 0.3s ease;
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
  transition: all 0.3s ease;
}

.sim-chart-wrap {
  position: relative;
  width: 100%;
  height: 68px;
  margin: 1px 0;
  cursor: crosshair;
  z-index: 4;
}

.sim-chart-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.sim-path-line, .sim-path-area, .milestone-dot, .milestone-ring {
  transition: d 0.4s cubic-bezier(0.16, 1, 0.3, 1), cy 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.sim-laser-pulse {
  stroke-dasharray: 25 240;
  animation: laserFlow 3.5s linear infinite;
  transition: d 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes laserFlow {
  0% { stroke-dashoffset: 265; }
  100% { stroke-dashoffset: 0; }
}

.sim-scan-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.9) 30%, rgba(56, 189, 248, 0.9) 70%, transparent 100%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
  z-index: 6;
}

.sim-scan-tooltip {
  position: absolute;
  top: -12px;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(56, 189, 248, 0.4);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6), 0 0 12px rgba(56, 189, 248, 0.3);
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 10.5px;
  font-weight: 700;
  color: #38bdf8;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 7;
}

.milestone-ring {
  animation: milestonePulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes milestonePulse {
  0% { r: 5px; opacity: 0.9; }
  50% { r: 9px; opacity: 0.3; }
  100% { r: 5px; opacity: 0.9; }
}

.sim-insight-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 11px;
  padding: 7px 11px;
  box-sizing: border-box;
  position: relative;
  z-index: 5;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.sim-insight-chip:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.14);
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
  transition: transform 0.25s ease;
}

.sim-insight-chip:hover .sim-bulb-icon {
  transform: scale(1.08) rotate(5deg);
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
  transition: opacity 0.25s ease;
}

.sim-insight-text strong {
  color: #f8fafc;
  font-weight: 600;
}

@media (max-width: 809px) {
  .ai-sim-widget {
    max-height: 245px;
    padding: 10px 12px;
  }
  .sim-tab-btn {
    font-size: 10px;
    padding: 3px 7px;
  }
  .sim-live-tag {
    font-size: 9.5px;
    padding: 3px 6px;
  }
  .sim-curr-score {
    font-size: 17px;
  }
  .sim-proj-score {
    font-size: 26px;
  }
  .sim-gain-badge {
    font-size: 11px;
    padding: 3px 7px;
  }
  .sim-chart-wrap {
    height: 54px;
  }
  .sim-insight-chip {
    padding: 5px 8px;
    gap: 7px;
  }
  .sim-bulb-icon {
    width: 18px;
    height: 18px;
  }
  .sim-insight-text {
    font-size: 10px;
  }
}
`;

// 3. Client JS initialization script for interactions
const clientInteractionJs = `
(function() {
  const scenarios = {
    dues: {
      score: 780,
      gain: "+38 PTS ↗",
      peakY: 10,
      linePath: "M 0 56 C 60 54, 110 46, 170 33 C 230 20, 275 14, 335 10",
      areaPath: "M 0 56 C 60 54, 110 46, 170 33 C 230 20, 275 14, 335 10 L 335 68 L 0 68 Z",
      tip: "<strong>Clever Tip:</strong> Drops credit utilization to <strong>11%</strong>. Projected in <strong>45 days</strong> with 0 hard pull impact."
    },
    emi: {
      score: 796,
      gain: "+54 PTS ↗",
      peakY: 5,
      linePath: "M 0 56 C 60 50, 110 38, 170 26 C 230 14, 275 8, 335 5",
      areaPath: "M 0 56 C 60 50, 110 38, 170 26 C 230 14, 275 8, 335 5 L 335 68 L 0 68 Z",
      tip: "<strong>Clever Tip:</strong> Eliminates high-interest leverage. Boosts debt-to-income score in <strong>60 days</strong>."
    },
    limit: {
      score: 764,
      gain: "+22 PTS ↗",
      peakY: 22,
      linePath: "M 0 56 C 60 55, 110 50, 170 40 C 230 30, 275 25, 335 22",
      areaPath: "M 0 56 C 60 55, 110 50, 170 40 C 230 30, 275 25, 335 22 L 335 68 L 0 68 Z",
      tip: "<strong>Clever Tip:</strong> Maintains optimal &lt;15% utilization band. Prevents bureau over-limit flags."
    }
  };

  function initSimWidgets() {
    document.querySelectorAll('.ai-sim-widget').forEach(widget => {
      if (widget.__simInit) return;
      widget.__simInit = true;

      const spotlight = widget.querySelector('.sim-spotlight');
      const projScoreEl = widget.querySelector('.sim-proj-score');
      const gainBadgeEl = widget.querySelector('.sim-gain-badge');
      const insightTextEl = widget.querySelector('.sim-insight-text');
      const pathLine = widget.querySelector('.sim-path-line');
      const laserLine = widget.querySelector('.sim-laser-pulse');
      const pathArea = widget.querySelector('.sim-path-area');
      const dotInner = widget.querySelector('.milestone-dot');
      const dotOuter = widget.querySelector('.milestone-ring');
      const tabBtns = widget.querySelectorAll('.sim-tab-btn');
      const chartWrap = widget.querySelector('.sim-chart-wrap');
      const scanLine = widget.querySelector('.sim-scan-line');
      const scanTooltip = widget.querySelector('.sim-scan-tooltip');

      let currentScenario = 'dues';

      tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          const scKey = btn.getAttribute('data-scenario');
          if (!scKey || scKey === currentScenario) return;

          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentScenario = scKey;

          const data = scenarios[scKey];
          if (!data) return;

          if (projScoreEl) {
            const startVal = parseInt(projScoreEl.textContent) || 742;
            const endVal = data.score;
            const duration = 350;
            const startTime = performance.now();
            function updateScore(now) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              projScoreEl.textContent = Math.round(startVal + (endVal - startVal) * easeOut);
              if (progress < 1) requestAnimationFrame(updateScore);
            }
            requestAnimationFrame(updateScore);
          }

          if (gainBadgeEl) gainBadgeEl.textContent = data.gain;

          if (insightTextEl) {
            insightTextEl.style.opacity = '0';
            setTimeout(() => {
              insightTextEl.innerHTML = data.tip;
              insightTextEl.style.opacity = '1';
            }, 120);
          }

          if (pathLine) pathLine.setAttribute('d', data.linePath);
          if (laserLine) laserLine.setAttribute('d', data.linePath);
          if (pathArea) pathArea.setAttribute('d', data.areaPath);
          if (dotInner) dotInner.setAttribute('cy', data.peakY);
          if (dotOuter) dotOuter.setAttribute('cy', data.peakY);
        });
      });

      widget.addEventListener('mousemove', (e) => {
        if (!spotlight) return;
        const rect = widget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlight.style.transform = 'translate(' + (x - 80) + 'px, ' + (y - 80) + 'px)';
      });

      if (chartWrap && scanLine && scanTooltip) {
        chartWrap.addEventListener('mousemove', (e) => {
          const rect = chartWrap.getBoundingClientRect();
          const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
          const pct = x / rect.width;

          scanLine.style.opacity = '1';
          scanLine.style.left = x + 'px';

          scanTooltip.style.opacity = '1';
          scanTooltip.style.left = x + 'px';

          const day = Math.max(1, Math.round(pct * 60));
          const data = scenarios[currentScenario] || scenarios.dues;
          const startScore = 742;
          const targetScore = data.score;
          const scoreAtDay = Math.round(startScore + (targetScore - startScore) * Math.pow(pct, 1.4));

          scanTooltip.textContent = 'Day ' + day + ': ' + scoreAtDay + ' PTS';
        });

        chartWrap.addEventListener('mouseleave', () => {
          scanLine.style.opacity = '0';
          scanTooltip.style.opacity = '0';
        });
      }
    });
  }

  window.__initAiSimWidget = initSimWidgets;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSimWidgets);
  } else {
    initSimWidgets();
  }

  // Periodic safeguard for Framer hydration re-rendering
  setInterval(initSimWidgets, 1000);
})();
`;

// 4. Update features.html and features/index.html
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

  // Inject client JS script before </body>
  if (html.includes('id="ai-sim-widget-script"')) {
    html = html.replace(/<script id="ai-sim-widget-script">[\s\S]*?<\/script>/, `<script id="ai-sim-widget-script">${clientInteractionJs}</script>`);
  } else {
    html = html.replace('</body>', `<script id="ai-sim-widget-script">${clientInteractionJs}</script></body>`);
  }

  // Replace content of framer-tgs7m5
  const gStartTag = 'class="framer-tgs7m5" data-framer-name="Graphics">';
  const gIdx = html.indexOf(gStartTag);
  const textStartTag = '<div class="framer-vlnoe0" data-framer-name="Text">';
  const tIdx = html.indexOf(textStartTag, gIdx);

  if (gIdx !== -1 && tIdx !== -1) {
    const newGraphicsContent = `${gStartTag}<div class="ssr-variant hidden-1p4okdx hidden-1rvucs8"><div class="framer-sk3hgp-container"><div class="ai-sim-widget">${aiSimWidgetHtml}</div></div></div><div class="ssr-variant hidden-19m6io8 hidden-1rvucs8"><div class="framer-sk3hgp-container"><div class="ai-sim-widget">${aiSimWidgetHtml}</div></div></div><div class="ssr-variant hidden-1p4okdx hidden-19m6io8"><div class="framer-sk3hgp-container"><div class="ai-sim-widget">${aiSimWidgetHtml}</div></div></div></div>`;
    
    html = html.slice(0, gIdx) + newGraphicsContent + html.slice(tIdx);
    console.log('Updated graphics container & script in', ff);
  } else {
    console.warn('Could not find markers in', ff, { gIdx, tIdx });
  }

  fs.writeFileSync(ff, html, 'utf8');
}

// 5. Update Framer JS component: HXv7
const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
if (fs.existsSync(hxv7Path)) {
  let js = fs.readFileSync(hxv7Path, 'utf8');

  const yrMarker = ',yr=B(';
  const yrIdx = js.indexOf(yrMarker);
  const grMarker = ',gr=[';
  const grIdx = js.indexOf(grMarker, yrIdx);
  const grEndMarker = '],xe=L(yr,gr';
  const grEndIdx = js.indexOf(grEndMarker, grIdx);

  if (yrIdx !== -1 && grIdx !== -1 && grEndIdx !== -1) {
    const escapedHtml = JSON.stringify(aiSimWidgetHtml);
    // In React yr component, use Pe (useEffect) to initialize the interactions
    const newYr = `,yr=B(function(o,n){Pe(function(){if(typeof window!=="undefined"&&window.__initAiSimWidget){window.__initAiSimWidget()}},[]);return e("div",{ref:n,className:"ai-sim-widget",style:{width:"100%",height:"100%",...o?.style},dangerouslySetInnerHTML:{__html:${escapedHtml}}})})`;
    const escapedCss = JSON.stringify(aiSimWidgetCss.replace(/\s+/g, ' '));
    const newGr = `,gr=[${escapedCss}`;
    
    js = js.slice(0, yrIdx) + newYr + newGr + js.slice(grEndIdx);
    console.log('Successfully updated yr and gr in HXv7 with interaction hooks!');
    fs.writeFileSync(hxv7Path, js, 'utf8');
  } else {
    console.warn('Could not find markers in HXv7', { yrIdx, grIdx, grEndIdx });
  }
}

console.log('=== All interactive updates applied successfully! ===');
