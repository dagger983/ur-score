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

async function inspectFeatures() {
  const port = 9227;
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
    if (!page) {
      console.log('No page tab found');
      return;
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    await cdpCall(ws, 'Runtime.enable', {}, 1);

    const evalRes = await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        // Find all cards
        const cards = Array.from(document.querySelectorAll('[data-framer-name="Card"], [data-framer-name*="AI"]')).map(c => {
          const r = c.getBoundingClientRect();
          return {
            name: c.getAttribute('data-framer-name'),
            tag: c.tagName,
            text: c.innerText ? c.innerText.slice(0, 50) : '',
            top: Math.round(r.top + window.scrollY),
            height: Math.round(r.height),
            visible: c.offsetWidth > 0 && c.offsetHeight > 0
          };
        });

        // Find AI card specifically
        const allText = Array.from(document.querySelectorAll('*')).filter(el => el.children.length === 0 && el.innerText && el.innerText.includes('AI Integrations'));
        const aiCardEl = allText.length > 0 ? allText[0].closest('[data-framer-name="Card"]') || allText[0].parentElement : null;

        return {
          cards,
          aiCard: aiCardEl ? {
            html: aiCardEl.outerHTML.slice(0, 300),
            top: Math.round(aiCardEl.getBoundingClientRect().top + window.scrollY),
            height: Math.round(aiCardEl.getBoundingClientRect().height)
          } : null,
          scrollHeight: document.body.scrollHeight,
          windowHeight: window.innerHeight
        };
      })()`,
      returnByValue: true
    }, 2);

    console.log('Features Eval Result:', JSON.stringify(evalRes.result.value, null, 2));
    ws.close();
  } catch (e) {
    console.error('Error:', e);
  } finally {
    proc.kill();
  }
}

inspectFeatures();
