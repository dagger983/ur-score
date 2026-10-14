const { spawn } = require('child_process');
const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

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
  const port = 9257;
  const proc = spawn(edge, ['--headless=new', '--disable-gpu', '--window-size=1536,950', '--remote-debugging-port=' + port, 'http://localhost:5000/payer.framer.website/features']);
  await new Promise(r => setTimeout(r, 2000));
  try {
    const res = await fetch('http://127.0.0.1:' + port + '/json');
    const tabs = await res.json();
    const page = tabs[0];
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);
    let id = 1;
    function send(m, p) { return cdpCall(ws, m, p, id++); }
    await send('Runtime.enable');
    const r = await send('Runtime.evaluate', {
      expression: `(() => {
        const card = document.querySelector('[data-framer-name="Integrations"]');
        if (!card) return 'card not found';
        const nodes = Array.from(card.querySelectorAll('[data-framer-name]'));
        return nodes.map(n => ({
          name: n.getAttribute('data-framer-name'),
          className: n.className,
          w: n.offsetWidth,
          h: n.offsetHeight,
          children: n.children.length,
          innerHTMLPreview: n.innerHTML.slice(0, 100)
        }));
      })()`,
      returnByValue: true
    });
    console.log(JSON.stringify(r.result.value, null, 2));
    ws.close();
  } finally {
    proc.kill();
  }
})();
