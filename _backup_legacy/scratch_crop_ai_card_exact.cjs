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
  const port = 9260;
  const proc = spawn(edge, ['--headless=new', '--disable-gpu', '--window-size=1536,950', '--remote-debugging-port=' + port, 'http://localhost:5000/payer.framer.website/features']);
  await new Promise(r => setTimeout(r, 2000));
  try {
    const res = await fetch('http://127.0.0.1:' + port + '/json');
    const tabs = await res.json();
    const page = tabs.find(t => t.type === 'page') || tabs[0];
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);
    let id = 1;
    function send(m, p) { return cdpCall(ws, m, p, id++); }
    await send('Runtime.enable');
    await send('Page.enable');
    
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 700);' });
    await new Promise(r => setTimeout(r, 800));

    const r = await send('Runtime.evaluate', {
      expression: `(() => {
        const textNodes = Array.from(document.querySelectorAll('span, p')).filter(e => e.textContent.includes('Clever AI Insights'));
        const p = textNodes[0];
        let card = p;
        while (card && !card.classList.contains('framer-knnqq3') && !card.getAttribute('data-border')) {
          card = card.parentElement;
        }
        if (!card) card = p.parentElement.parentElement.parentElement;
        const rect = card.getBoundingClientRect();
        return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
      })()`,
      returnByValue: true
    });
    console.log('Card rect:', r.result.value);
    const ssFull = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(brainDir + '/features_viewport_scroll.png', Buffer.from(ssFull.data, 'base64'));
    console.log('Saved features_viewport_scroll.png');

    ws.close();
  } finally {
    proc.kill();
  }
})();
