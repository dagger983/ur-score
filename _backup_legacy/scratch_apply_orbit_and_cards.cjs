const fs = require('fs');

console.log('=== Step 1: Updating HXv7 (AI Orbit & Card 1/2 Text) ===');
const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let hxv7 = fs.readFileSync(hxv7Path, 'utf8');

// Center SVG (glowing circular UR logo)
const centerSvg = '<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient id="ur-orbit-center-grad" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="40%" stop-color="#0284c7"/><stop offset="75%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#020617"/></radialGradient><clipPath id="ur-orbit-circle-clip"><circle cx="45" cy="45" r="43"/></clipPath></defs><circle cx="45" cy="45" r="43" fill="url(#ur-orbit-center-grad)"/><g clip-path="url(#ur-orbit-circle-clip)"><path d="M-5 56 Q 23 44, 45 54 T 95 60 L 95 95 L -5 95 Z" fill="#0284c7" opacity="0.6"/><path d="M-5 66 Q 29 52, 55 62 T 95 70 L 95 95 L -5 95 Z" fill="#38bdf8" opacity="0.5"/><image href="/framerusercontent.com/images/ur_score_logo.png" x="12" y="12" width="66" height="66" preserveAspectRatio="xMidYMid meet"/></g><circle cx="45" cy="45" r="42.5" stroke="#00e5ff" stroke-width="2.5" opacity="0.95"/></svg>';

// Grok SVG (54x54 squircle with white X)
const grokSvg = '<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="14" fill="#000000" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1.5"/><path d="M16 16L32 38M38 16L29 27.5M25 32.5L22 38" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/></svg>';

// 1. In framer-1i9pyl1 (Left Satellite): Put xAI Grok inside framer-1x6bsw4!
const leftSatelliteRegex = /e\(r\.div,\{className:"framer-1i9pyl1","data-border":!0,"data-framer-name":"App Icon"[\s\S]*?children:e\(b,\{className:"framer-1x6bsw4"[\s\S]*?withExternalLayout:!0\}\)\}\)/;
const newLeftSatellite = `e(r.div,{className:"framer-1i9pyl1","data-border":!0,"data-framer-name":"App Icon",layoutDependency:a,layoutId:"jR3cPz3NB",style:{"--border-bottom-width":"2px","--border-color":"rgba(255, 255, 255, 0.15)","--border-left-width":"2px","--border-right-width":"2px","--border-style":"solid","--border-top-width":"2px",backdropFilter:"blur(10px)",background:"linear-gradient(180deg, rgb(30, 30, 30) 0%, rgb(18, 18, 18) 100%)",borderBottomLeftRadius:1e4,borderBottomRightRadius:1e4,borderTopLeftRadius:1e4,borderTopRightRadius:1e4,WebkitBackdropFilter:"blur(10px)",width:68,height:68,display:"flex",alignItems:"center",justifyContent:"center"},children:e(b,{className:"framer-1x6bsw4","data-framer-name":"xAI Grok",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"q_xaSYk6Q",style:{filter:"drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.75))",WebkitFilter:"drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.75))"},svg:'${grokSvg}',withExternalLayout:!0})})`;

if (leftSatelliteRegex.test(hxv7)) {
  hxv7 = hxv7.replace(leftSatelliteRegex, newLeftSatellite);
  console.log('Replaced left satellite with xAI Grok');
} else {
  console.log('Warning: leftSatelliteRegex did not match');
}

// 2. In framer-jowe18 (Center Node): Put UR Score Circular Logo inside framer-u67xta!
const centerNodeRegex = /e\(r\.div,\{className:"framer-jowe18","data-border":!0,"data-framer-name":"App Icon"[\s\S]*?children:e\(b,\{className:"framer-u67xta framer-rtz2tb"[\s\S]*?withExternalLayout:!0\}\)\}\)/;
const newCenterNode = `e(r.div,{className:"framer-jowe18","data-border":!0,"data-framer-name":"App Icon",layoutDependency:a,layoutId:"hpjraIDcn",style:{"--border-bottom-width":"0px","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px",backdropFilter:"blur(12px)",background:"transparent",borderRadius:"50%",borderBottomLeftRadius:"50%",borderBottomRightRadius:"50%",borderTopLeftRadius:"50%",borderTopRightRadius:"50%",WebkitBackdropFilter:"blur(12px)",width:90,height:90,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},children:e(b,{className:"framer-u67xta framer-rtz2tb","data-framer-name":"UR Score Logo",fill:"black",intrinsicHeight:90,intrinsicWidth:90,layoutDependency:a,layoutId:"vXZ9NPUsb",style:{filter:"drop-shadow(0px 0px 30px rgba(0, 220, 255, 0.95)) drop-shadow(0px 0px 50px rgba(0, 102, 255, 0.6))",WebkitFilter:"drop-shadow(0px 0px 30px rgba(0, 220, 255, 0.95)) drop-shadow(0px 0px 50px rgba(0, 102, 255, 0.6))"},svg:'${centerSvg}',withExternalLayout:!0})})`;

if (centerNodeRegex.test(hxv7)) {
  hxv7 = hxv7.replace(centerNodeRegex, newCenterNode);
  console.log('Replaced center node with UR Score Logo');
} else {
  console.log('Warning: centerNodeRegex did not match');
}

// 3. Card 4 title & description text:
hxv7 = hxv7.replace(/children:"AI Credit Companion\."/g, 'children:"AI Integrations."');
hxv7 = hxv7.replace(
  /Powered by ChatGPT, Claude, Gemini & Grok\. Ask any question about your score and get instant, personalized credit improvement simulations\./g,
  'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
);

// 4. Update Card 1 & 2 content in HXv7 to match Credit Health!
// Card 1: Credit Analytics
hxv7 = hxv7.replace(/children:"\$212,003"/g, 'children:"785"');
hxv7 = hxv7.replace(/children:"This month"/g, 'children:"Credit Score"');
hxv7 = hxv7.replace(/children:"18% past 30 days"/g, 'children:"+28 pts past 30 days"');
hxv7 = hxv7.replace(/children:"\$179,664"/g, 'children:"757"');
hxv7 = hxv7.replace(/children:"Last month"/g, 'children:"Previous Cycle"');

// Card 2: Score Improvement
hxv7 = hxv7.replace(/children:"\$21,003"/g, 'children:"100%"');
hxv7 = hxv7.replace(/children:"Meera Haria"/g, 'children:"Payment History"');
hxv7 = hxv7.replace(/children:"India"/g, 'children:"On-Time"');
hxv7 = hxv7.replace(/children:"\$15,000"/g, 'children:"18%"');
hxv7 = hxv7.replace(/children:"Luv Raghuvanshi"/g, 'children:"Credit Utilization"');
hxv7 = hxv7.replace(/children:"Germany"/g, 'children:"Optimal"');

fs.writeFileSync(hxv7Path, hxv7, 'utf8');
console.log('Saved updated HXv7 mjs');
