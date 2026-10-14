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

async function findOverflows() {
  const port = 9233;
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
        const c5 = document.querySelector('.framer-c5emsp');
        const results = [];
        let p = c5.parentElement;
        while (p) {
          const s = getComputedStyle(p);
          results.push({
            tag: p.tagName,
            cls: p.className,
            id: p.id,
            overflow: s.overflow,
            overflowX: s.overflowX,
            overflowY: s.overflowY,
            contain: s.contain,
            transform: s.transform,
            perspective: s.perspective,
            filter: s.filter,
            willChange: s.willChange
          });
          p = p.parentElement;
        }
        return results;
      })()`,
      returnByValue: true
    }, 2);

    console.log('All ancestors with properties:', JSON.stringify(evalRes.result.value, null, 2));
    ws.close();
  } catch (e) {
    console.error(e);
  } finally {
    proc.kill();
  }
}

findOverflows();
