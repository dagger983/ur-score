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
  const port = 9265;
  const proc = spawn(edge, ['--headless=new', '--disable-gpu', '--window-size=900,900', '--remote-debugging-port=' + port, 'file:///d:/Project/ur-score/scratch_preview_ai_simulation_widget.html']);
  await new Promise(r => setTimeout(r, 2000));
  try {
    const res = await fetch('http://127.0.0.1:' + port + '/json');
    const tabs = await res.json();
    console.log('Tabs:', tabs);
    const page = tabs.find(t => t.type === 'page') || tabs[0];
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);
    let id = 1;
    function send(m, p) { return cdpCall(ws, m, p, id++); }
    await send('Runtime.enable');
    await send('Page.enable');
    await send('Page.navigate', { url: 'file:///d:/Project/ur-score/scratch_preview_ai_simulation_widget.html' });
    await new Promise(r => setTimeout(r, 1000));
    
    await new Promise(r => setTimeout(r, 500));

    const r = await send('Runtime.evaluate', {
      expression: `(() => {
        const card = document.querySelector('.card');
        const rect = card.getBoundingClientRect();
        return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
      })()`,
      returnByValue: true
    });
    console.log('Card rect:', r.result.value);
    const clip = r.result.value;
    const ssCard = await send('Page.captureScreenshot', {
      format: 'png',
      clip: { x: clip.x, y: clip.y, width: clip.width, height: clip.height, scale: 1 }
    });
    const outPath = brainDir + '/preview_ai_widget.png';
    fs.writeFileSync(outPath, Buffer.from(ssCard.data, 'base64'));
    console.log('Saved', outPath);

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    proc.kill();
  }
})();
