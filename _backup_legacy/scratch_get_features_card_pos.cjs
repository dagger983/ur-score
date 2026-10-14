const { spawn } = require('child_process');
const fs = require('fs');
const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const brainDir = 'C:\\Users\\Vicky\\.gemini\\antigravity-ide\\brain\\14120e7a-1779-4cbf-9b75-d3deafcfe29b';

async function cdpCall(ws, method, params = {}, id = 1) {
  return new Promise((resolve, reject) => {
    const handler = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === id) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

(async () => {
  const port = 9250;
  const proc = spawn(edge, ['--headless=new', '--disable-gpu', '--window-size=1536,950', '--remote-debugging-port=' + port, 'http://localhost:5000/payer.framer.website/features']);
  await new Promise(r => setTimeout(r, 2000));
  try {
    const res = await fetch('http://127.0.0.1:' + port + '/json');
    const tabs = await res.json();
    const page = tabs.find(t => t.url.includes('features'));
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);
    let id = 1;
    function send(m, p) { return cdpCall(ws, m, p, id++); }
    await send('Runtime.enable');
    await send('Page.enable');
    
    // Scroll so card is nicely centered
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 650);' });
    await new Promise(r => setTimeout(r, 800));
    const ssViewport = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(brainDir + '/features_card_in_view.png', Buffer.from(ssViewport.data, 'base64'));

    // Also element clip
    const r = await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('[data-framer-name="Integrations"]');
        const rect = el.getBoundingClientRect();
        return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
      })()`,
      returnByValue: true
    });
    const clip = r.result.value;
    const ssCard = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: clip.x - 10, y: clip.y - 10, width: clip.width + 20, height: clip.height + 20, scale: 1 }
    });
    fs.writeFileSync(brainDir + '/features_ai_card_clipped.png', Buffer.from(ssCard.data, 'base64'));
    console.log('Saved features_card_in_view.png and features_ai_card_clipped.png');

    ws.close();
  } finally {
    proc.kill();
  }
})();
