const fs = require('fs');

const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let hxv7 = fs.readFileSync(hxv7Path, 'utf8');

// 1. Center Node Replacement: Large glowing circular UR badge
const centerSvg = '<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient id="ur-orbit-center-grad" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="40%" stop-color="#0284c7"/><stop offset="75%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#020617"/></radialGradient><clipPath id="ur-orbit-circle-clip"><circle cx="46" cy="46" r="44"/></clipPath></defs><circle cx="46" cy="46" r="44" fill="url(#ur-orbit-center-grad)"/><g clip-path="url(#ur-orbit-circle-clip)"><path d="M-5 58 Q 24 45, 46 56 T 97 62 L 97 97 L -5 97 Z" fill="#0284c7" opacity="0.6"/><path d="M-5 68 Q 30 54, 56 64 T 97 72 L 97 97 L -5 97 Z" fill="#38bdf8" opacity="0.5"/><image href="/framerusercontent.com/images/ur_score_logo.png" x="12" y="12" width="68" height="68" preserveAspectRatio="xMidYMid meet"/></g><circle cx="46" cy="46" r="43.5" stroke="#00e5ff" stroke-width="2.5" opacity="0.95"/></svg>';

const oldCenterBlockRegex = /children:\[e\(r\.div,\{className:"framer-1i9pyl1","data-border":!0,"data-framer-name":"App Icon"[\s\S]*?children:e\(b,\{className:"framer-1x6bsw4","data-framer-name":"Logomark \(2\)"[\s\S]*?withExternalLayout:!0\}\)\}\)/;

const newCenterBlock = `children:[e(r.div,{className:"framer-1i9pyl1","data-border":!0,"data-framer-name":"App Icon",layoutDependency:a,layoutId:"jR3cPz3NB",style:{"--border-bottom-width":"0px","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px",backdropFilter:"blur(12px)",background:"transparent",borderRadius:"50%",borderBottomLeftRadius:"50%",borderBottomRightRadius:"50%",borderTopLeftRadius:"50%",borderTopRightRadius:"50%",WebkitBackdropFilter:"blur(12px)",width:92,height:92,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},children:e(b,{className:"framer-1x6bsw4","data-framer-name":"Logomark (2)",fill:"black",intrinsicHeight:92,intrinsicWidth:92,layoutDependency:a,layoutId:"q_xaSYk6Q",style:{filter:"drop-shadow(0px 0px 30px rgba(0, 220, 255, 0.95)) drop-shadow(0px 0px 50px rgba(0, 102, 255, 0.6))",WebkitFilter:"drop-shadow(0px 0px 30px rgba(0, 220, 255, 0.95)) drop-shadow(0px 0px 50px rgba(0, 102, 255, 0.6))"},svg:'${centerSvg}',withExternalLayout:!0})})`;

hxv7 = hxv7.replace(oldCenterBlockRegex, newCenterBlock);

// 2. Left Node Replacement: xAI Grok (54x54 squircle)
const grokSvg = '<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="14" fill="#000000" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1.5"/><path d="M16 16L32 38M38 16L29 27.5M25 32.5L22 38" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/></svg>';

const oldLeftBlockRegex = /e\(r\.div,\{className:"framer-jowe18","data-border":!0,"data-framer-name":"Security Icon"[\s\S]*?children:e\(Ye,[\s\S]*?withExternalLayout:!0\}\)\}\)\}\)/;

const newLeftBlock = `e(r.div,{className:"framer-jowe18","data-border":!0,"data-framer-name":"App Icon",layoutDependency:a,layoutId:"hpjraIDcn",style:{"--border-bottom-width":"2px","--border-color":"rgba(255, 255, 255, 0.15)","--border-left-width":"2px","--border-right-width":"2px","--border-style":"solid","--border-top-width":"2px",backdropFilter:"blur(10px)",background:"linear-gradient(180deg, rgb(30, 30, 30) 0%, rgb(18, 18, 18) 100%)",borderBottomLeftRadius:1e4,borderBottomRightRadius:1e4,borderTopLeftRadius:1e4,borderTopRightRadius:1e4,WebkitBackdropFilter:"blur(10px)"},children:e(b,{className:"framer-u67xta framer-rtz2tb","data-framer-name":"xAI Grok",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"vXZ9NPUsb",style:{filter:"drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.8))",WebkitFilter:"drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.8))"},svg:'${grokSvg}',withExternalLayout:!0})})`;

hxv7 = hxv7.replace(oldLeftBlockRegex, newLeftBlock);

// 3. Update AI Orbit Card Headline & Copy
hxv7 = hxv7.replace(/children:"AI Integrations\."/g, 'children:"AI Integrations."');
hxv7 = hxv7.replace(
  /Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice\./g,
  'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
);

fs.writeFileSync(hxv7Path, hxv7, 'utf8');
console.log('Successfully updated HXv7 mjs with center UR badge and xAI Grok!');
