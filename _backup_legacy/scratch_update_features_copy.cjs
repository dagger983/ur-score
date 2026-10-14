const fs = require('fs');

const fHtmlPath = 'payer_clone/payer.framer.website/features.html';
const fMjsPath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';

let html = fs.readFileSync(fHtmlPath, 'utf8');
let mjs = fs.readFileSync(fMjsPath, 'utf8');

// Replacements map
const replacements = [
  {
    old: 'From instant transfers to high-limit transactions, explore the tools that make UR SCORE the fastest and most secure way to pay.',
    new: 'From real-time score tracking to personalized AI insights, explore the tools that make UR SCORE the smartest way to understand and build your credit profile.'
  },
  {
    old: 'From instant transfers to high-limit transactions, explore the tools that make UR Score the most intuitive and most secure way to pay.',
    new: 'From real-time score tracking to personalized AI insights, explore the tools that make UR Score the smartest way to understand and build your credit profile.'
  },
  {
    old: 'From instant transfers to high-limit transactions, explore the tools that make UR Score the fastest and most secure way to pay.',
    new: 'From real-time score tracking to personalized AI insights, explore the tools that make UR Score the smartest way to understand and build your credit profile.'
  },
  {
    old: 'Track spending, optimize cash flow, and make data-driven financial decisions effortlessly.',
    new: 'Track score fluctuations, understand key factors, and make data-backed credit decisions effortlessly.'
  },
  {
    old: 'Send and receive money across borders seamlessly with competitive exchange rates.',
    new: 'Actionable, personalized step-by-step guidance to boost your credit score and optimize credit utilization.'
  },
  {
    old: 'Your funds and data are protected with advanced encryption and multi-layer authentication.',
    new: 'Official CIBIL synced with 256-bit encryption. Zero hard pulls guaranteed so checking never affects your score.'
  },
  {
    old: 'Easily connect UR SCORE with your favorite apps, accounting tools, and business platforms.',
    new: 'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
  },
  {
    old: 'Easily connect UR Score with your favorite apps, accounting tools, and business platforms.',
    new: 'Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
  },
  {
    old: 'Analytics. Track spending, optimize cash flow, and make data-driven financial decisions effortlessly.',
    new: 'Credit Analytics. Track score fluctuations, understand key factors, and make data-backed credit decisions effortlessly.'
  },
  {
    old: 'International payments. Send and receive money across borders seamlessly with competitive exchange rates.',
    new: 'Score Improvement. Actionable, personalized step-by-step guidance to boost your credit score and optimize credit utilization.'
  },
  {
    old: 'Security. Your funds and data are protected with advanced encryption and multi-layer authentication.',
    new: 'Bank-Grade Privacy. Official CIBIL synced with 256-bit encryption. Zero hard pulls guaranteed so checking never affects your score.'
  },
  {
    old: 'Integrations. Easily connect UR Score with your favorite apps, accounting tools, and business platforms.',
    new: 'AI Integrations. Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice.'
  }
];

for (const r of replacements) {
  html = html.split(r.old).join(r.new);
  mjs = mjs.split(r.old).join(r.new);
}

// In mjs, also replace the card titles:
mjs = mjs.replace(/children:"International payments\."/g, 'children:"Score Improvement."');
mjs = mjs.replace(/children:"Analytics\."/g, 'children:"Credit Analytics."');
mjs = mjs.replace(/children:"Security\."/g, 'children:"Bank-Grade Privacy."');
mjs = mjs.replace(/children:"Integrations\."/g, 'children:"AI Integrations."');

// In html, also replace card titles
html = html.replace(/>International payments\.</g, '>Score Improvement.<');
html = html.replace(/>Analytics\.</g, '>Credit Analytics.<');
html = html.replace(/>Security\.</g, '>Bank-Grade Privacy.<');
html = html.replace(/>Integrations\.</g, '>AI Integrations.<');

// Add styling for enlarged orbit center logo in features.html
const orbitCenterCss = `
<style>
.framer-BfVuj .framer-1i9pyl1 {
  width: 96px !important;
  height: 96px !important;
  padding: 0 !important;
  border-radius: 50% !important;
  background: radial-gradient(circle, rgba(20, 24, 38, 0.95) 0%, rgba(10, 14, 26, 0.98) 100%) !important;
  border: 2px solid rgba(59, 130, 246, 0.5) !important;
  box-shadow: 0 0 35px rgba(37, 99, 235, 0.55), inset 0 0 15px rgba(59, 130, 246, 0.3) !important;
  overflow: visible !important;
  z-index: 10 !important;
}
.framer-BfVuj .framer-1i9pyl1 .framer-1x6bsw4 {
  width: 82px !important;
  height: 82px !important;
}
</style>
`;

if (!html.includes('.framer-BfVuj .framer-1i9pyl1')) {
  html = html.replace('</head>', orbitCenterCss + '</head>');
}

fs.writeFileSync(fHtmlPath, html, 'utf8');
fs.writeFileSync(fMjsPath, mjs, 'utf8');
console.log('Successfully updated features.html and HXv7 mjs copy!');
