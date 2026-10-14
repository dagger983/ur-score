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

async function findSvgDef() {
  const port = 9243;
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
    const page = tabs.find(t => t.url.includes('features'));
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

    await cdpCall(ws, 'Runtime.enable', {}, 1);

    const evalRes = await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const ids = ['svg-1678641818_1075', 'svg-322620486_317', 'svg1780361477_785', 'svg732972783_816', 'svg1632938631_358'];
        return ids.map(id => {
          const el = document.getElementById(id);
          return {
            id,
            found: !!el,
            html: el ? el.outerHTML.slice(0, 200) : null,
            parent: el ? el.parentElement.tagName : null
          };
        });
      })()`,
      returnByValue: true
    }, 2);

    console.log('SVG Defs in browser:', JSON.stringify(evalRes.result.value, null, 2));
    ws.close();
  } catch (e) {
    console.error(e);
  } finally {
    proc.kill();
  }
}

findSvgDef();
