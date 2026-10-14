const { spawn } = require('child_process');
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

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

async function testFullScroll() {
  const port = 9235;
  const proc = spawn(edge, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    'http://localhost:5000/payer.framer.website/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const res = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await res.json();
    const page = tabs.find(t => t.url === 'http://localhost:5000/payer.framer.website/');
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

    await cdpCall(ws, 'Runtime.enable', {}, 1);
    await cdpCall(ws, 'Page.enable', {}, 2);

    await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const s = document.createElement('style');
        s.innerHTML = '.framer-3gVIi { overflow: visible !important; overflow-x: visible !important; overflow-y: visible !important; }';
        document.head.appendChild(s);
      })()`
    }, 3);

    const scrolls = [1200, 1800, 2400];
    for (const s of scrolls) {
      await cdpCall(ws, 'Runtime.evaluate', { expression: `window.scrollTo(0, ${s});` }, 10 + s);
      await new Promise(r => setTimeout(r, 600));
      const ss = await cdpCall(ws, 'Page.captureScreenshot', { format: 'png' }, 20 + s);
      const fs = require('fs');
      fs.writeFileSync(`C:\\Users\\Vicky\\.gemini\\antigravity-ide\\brain\\14120e7a-1779-4cbf-9b75-d3deafcfe29b\\fixed_home_scroll_${s}.png`, Buffer.from(ss.data, 'base64'));
      console.log(`Saved fixed_home_scroll_${s}.png`);
    }

    ws.close();
  } catch (e) {
    console.error(e);
  } finally {
    proc.kill();
  }
}

testFullScroll();
