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
  const port = 9258;
  const proc = spawn(edge, ['--headless=new', '--disable-gpu', '--window-size=1536,950', '--remote-debugging-port=' + port, 'http://localhost:5000/payer.framer.website/features']);
  await new Promise(r => setTimeout(r, 2500));
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
        const allText = Array.from(document.querySelectorAll('*')).filter(el => el.children.length === 0 && el.textContent.includes('Clever AI'));
        if (allText.length === 0) return 'No text found';
        const card = allText[0].closest('[data-border="true"]') || allText[0].parentElement.parentElement;
        const svgs = Array.from(card.querySelectorAll('svg'));
        return {
          cardTag: card.tagName,
          cardClass: card.className,
          svgCount: svgs.length,
          svgs: svgs.map(s => ({
            tag: s.tagName,
            w: s.clientWidth,
            h: s.clientHeight,
            viewBox: s.getAttribute('viewBox'),
            use: s.querySelector('use') ? s.querySelector('use').getAttribute('href') : null,
            html: s.outerHTML.slice(0, 200)
          }))
        };
      })()`,
      returnByValue: true
    });
    console.log(JSON.stringify(r.result.value, null, 2));
    ws.close();
  } finally {
    proc.kill();
  }
})();
