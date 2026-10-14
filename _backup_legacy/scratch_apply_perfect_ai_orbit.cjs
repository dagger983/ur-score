const fs = require('fs');

const fMjsPath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let txt = fs.readFileSync(fMjsPath, 'utf8');

// 1. Center Logomark (2) SVG
const centerSvg = `<svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient id="ur-badge-glow" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="35%" stop-color="#1d4ed8"/><stop offset="70%" stop-color="#0f172a"/><stop offset="100%" stop-color="#020617"/></radialGradient><clipPath id="ur-circ-clip"><circle cx="39" cy="39" r="37"/></clipPath></defs><circle cx="39" cy="39" r="37" fill="url(#ur-badge-glow)"/><circle cx="39" cy="39" r="37" stroke="#00d4ff" stroke-width="2.5" opacity="0.95"/><g clip-path="url(#ur-circ-clip)"><path d="M0 50 Q 20 40, 39 48 T 78 54 L 78 78 L 0 78 Z" fill="#0284c7" opacity="0.45"/><path d="M0 58 Q 24 48, 48 56 T 78 62 L 78 78 L 0 78 Z" fill="#38bdf8" opacity="0.35"/><image href="/framerusercontent.com/images/ur_score_logo.png" x="11" y="11" width="56" height="56" preserveAspectRatio="xMidYMid meet"/></g></svg>`;

txt = txt.replace(
  /children:e\(b,\{className:"framer-1x6bsw4","data-framer-name":"Logomark \(2\)"[\s\S]*?withExternalLayout:!0\}\)\)\}/,
  `children:e(b,{className:"framer-1x6bsw4","data-framer-name":"Logomark (2)",fill:"black",intrinsicHeight:78,intrinsicWidth:78,layoutDependency:a,layoutId:"q_xaSYk6Q",style:{filter:"drop-shadow(0px 0px 24px rgba(0, 212, 255, 0.9))",WebkitFilter:"drop-shadow(0px 0px 24px rgba(0, 212, 255, 0.9))"},svg:'${centerSvg}',withExternalLayout:!0})})`
);

// 2. Add Grok (xAI) at Node 6 (replaces Security Icon / UR SCORE Logo)
const grokSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="14" fill="#000000" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1.5"/><path d="M16 16L32 38M38 16L29 27.5M25 32.5L22 38" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/></svg>`;

txt = txt.replace(
  /"data-framer-name":"UR SCORE Logo"[\s\S]*?withExternalLayout:!0\}\)\)\}\)\}\)/,
  `"data-framer-name":"xAI Grok",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"vXZ9NPUsb",style:{filter:"drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.85))",WebkitFilter:"drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.85))"},svg:'${grokSvg}',withExternalLayout:!0})})})`
);

// 3. Fix CSS rules in gr: separate .framer-1i9pyl1 from other 68px nodes
txt = txt.replace(
  '".framer-BfVuj .framer-1i9pyl1, .framer-BfVuj .framer-prpkl9,',
  '".framer-BfVuj .framer-1i9pyl1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 96px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 96px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #38bdf8 0%, #1d4ed8 45%, #0f172a 100%); border: 2.5px solid #00d4ff; box-shadow: 0 0 35px rgba(0, 212, 255, 0.85), 0 0 60px rgba(37, 99, 235, 0.5), inset 0 0 15px rgba(56, 189, 248, 0.4); z-index: 10; }",".framer-BfVuj .framer-prpkl9,'
);

// 4. Update Card copy
const oldCardTitle = 'children:"AI Integrations."';
const newCardTitle = 'children:"AI Credit Companion."';
txt = txt.replace(oldCardTitle, newCardTitle);

const oldCardDesc = 'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.';
const newCardDesc = 'Powered by ChatGPT, Claude, Gemini & Grok. Ask any question about your score and get instant, personalized credit improvement simulations.';
txt = txt.split(oldCardDesc).join(newCardDesc);

fs.writeFileSync(fMjsPath, txt, 'utf8');
console.log('Successfully updated AI orbit and card copy in HXv7 mjs!');
