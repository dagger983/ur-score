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

async function debugSticky() {
  const port = 9230;
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
    const page = tabs.find(t => t.url.includes('payer.framer.website'));
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

    await cdpCall(ws, 'Runtime.enable', {}, 1);

    const evalRes = await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('.framer-c5emsp');
        const chain = [];
        let cur = el;
        while (cur) {
          const cs = getComputedStyle(cur);
          chain.push({
            tag: cur.tagName,
            cls: cur.className,
            overflow: cs.overflow,
            overflowX: cs.overflowX,
            overflowY: cs.overflowY,
            position: cs.position,
            display: cs.display,
            height: cs.height,
            offsetHeight: cur.offsetHeight
          });
          cur = cur.parentElement;
        }
        return chain;
      })()`,
      returnByValue: true
    }, 2);

    console.log('Ancestor Chain:', JSON.stringify(evalRes.result.value, null, 2));
    ws.close();
  } catch (e) {
    console.error(e);
  } finally {
    proc.kill();
  }
}

debugSticky();
