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

async function inspectIconDom() {
  const port = 9242;
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
        const icons = Array.from(document.querySelectorAll('[data-framer-name="OpenAI ChatGPT"], [data-framer-name="Google Gemini"], [data-framer-name="Anthropic Claude"], [data-framer-name="Meta AI"], [data-framer-name="Perplexity AI"]')).map(el => ({
          name: el.getAttribute('data-framer-name'),
          className: el.className,
          html: el.outerHTML
        }));
        return icons;
      })()`,
      returnByValue: true
    }, 2);

    console.log('Icons DOM:', JSON.stringify(evalRes.result.value, null, 2));
    ws.close();
  } catch (e) {
    console.error(e);
  } finally {
    proc.kill();
  }
}

inspectIconDom();
