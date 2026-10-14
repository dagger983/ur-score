const { spawn } = require('child_process');
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

async function captureScroll() {
  const port = 9228;
  const proc = spawn(edge, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    'http://localhost:5000/payer.framer.website/features'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const res = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await res.json();
    const page = tabs.find(t => t.url.includes('payer.framer.website/features'));
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        const handler = (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === curId) {
            ws.removeEventListener('message', handler);
            resolve(msg.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    await send('Runtime.enable');
    await send('Page.enable');

    const scrolls = [0, 400, 800, 1200, 1600];
    for (const s of scrolls) {
      await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${s});` });
      await new Promise(r => setTimeout(r, 600));
      const ss = await send('Page.captureScreenshot', { format: 'png' });
      const fs = require('fs');
      fs.writeFileSync(`C:\\Users\\Vicky\\.gemini\\antigravity-ide\\brain\\14120e7a-1779-4cbf-9b75-d3deafcfe29b\\features_scroll_${s}.png`, Buffer.from(ss.data, 'base64'));
      console.log(`Saved features_scroll_${s}.png`);
    }

    ws.close();
  } catch (e) {
    console.error(e);
  } finally {
    proc.kill();
  }
}

captureScroll();
