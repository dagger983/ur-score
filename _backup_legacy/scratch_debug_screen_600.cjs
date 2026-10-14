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

async function debugScreen600() {
  const port = 9231;
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

    // Scroll to 600
    await cdpCall(ws, 'Runtime.evaluate', { expression: `window.scrollTo(0, 600);` }, 2);
    await new Promise(r => setTimeout(r, 800));

    // Check all elements in viewport
    const evalRes = await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const phone = document.querySelector('[data-framer-name*="iPhone"]');
        const hero = document.querySelector('.framer-1xxpzb');
        const c5 = document.querySelector('.framer-c5emsp');
        return {
          scrollY: window.scrollY,
          phone: phone ? {
            rect: { top: phone.getBoundingClientRect().top, bottom: phone.getBoundingClientRect().bottom },
            style: {
              opacity: getComputedStyle(phone).opacity,
              transform: getComputedStyle(phone).transform,
              visibility: getComputedStyle(phone).visibility
            }
          } : null,
          c5: c5 ? {
            rect: { top: c5.getBoundingClientRect().top, bottom: c5.getBoundingClientRect().bottom },
            position: getComputedStyle(c5).position,
            top: getComputedStyle(c5).top
          } : null,
          hero: hero ? {
            rect: { top: hero.getBoundingClientRect().top, bottom: hero.getBoundingClientRect().bottom, height: hero.getBoundingClientRect().height }
          } : null
        };
      })()`,
      returnByValue: true
    }, 3);

    console.log('Scroll 600 Info:', JSON.stringify(evalRes.result.value, null, 2));
    ws.close();
  } catch (e) {
    console.error(e);
  } finally {
    proc.kill();
  }
}

debugScreen600();
