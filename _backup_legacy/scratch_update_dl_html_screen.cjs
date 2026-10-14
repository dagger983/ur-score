const fs = require('fs');

const dlHtmlPath = 'payer_clone/payer.framer.website/download.html';
let html = fs.readFileSync(dlHtmlPath, 'utf8');

// Find framer-19xlp0i in HTML
const start = html.indexOf('<div class="framer-19xlp0i"');
const statusBarEnd = html.indexOf('</div></div></div>', start); // end of Status Bar
const screenEnd = html.indexOf('</div></div></div></div><div class="framer-gskx1f"', statusBarEnd);

console.log('start:', start, 'statusBarEnd:', statusBarEnd, 'screenEnd:', screenEnd);

const centerBadgeHtml = `<div class="ur-splash-center" style="position:absolute;top:45%;left:50%;transform:translate(-50%, -50%);display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;text-align:center;pointer-events:none;"><div style="width:88px;height:88px;border-radius:22px;background:linear-gradient(135deg, #1e3a8a, #0284c7);padding:2px;box-shadow:0 0 35px rgba(2, 132, 199, 0.7), 0 0 15px rgba(59, 130, 246, 0.5);display:flex;align-items:center;justify-content:center;"><img src="/framerusercontent.com/images/ur_score_logo.png" style="width:100%;height:100%;border-radius:20px;object-fit:cover;" alt="UR Score"></div><p style="margin:16px 0 4px 0;font-family:Inter, sans-serif;font-size:18px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">UR SCORE</p><p style="margin:0;font-family:Inter, sans-serif;font-size:11px;font-weight:500;color:rgba(255, 255, 255, 0.65);letter-spacing:0.05em;text-transform:uppercase;">Official CIBIL Synced</p></div>`;

// Replace style on framer-19xlp0i
html = html.replace(
  /<div class="framer-19xlp0i" data-framer-name="Screen"[^>]*>/,
  '<div class="framer-19xlp0i" data-framer-name="Screen" style="background:radial-gradient(circle at 50% 45%, #0f172a 0%, #030712 100%) !important;border-radius:24px;overflow:hidden;position:relative;">'
);

// Cut out everything between statusBarEnd + 18 and screenEnd and insert centerBadgeHtml
const newHtml = html.slice(0, statusBarEnd + 18) + centerBadgeHtml + html.slice(screenEnd);
fs.writeFileSync(dlHtmlPath, newHtml, 'utf8');
console.log('Successfully updated download.html screen structure!');
