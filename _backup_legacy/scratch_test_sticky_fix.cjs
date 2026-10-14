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

async function testFix() {
  const port = 9232;
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
    await cdpCall(ws, 'Page.enable', {}, 2);

    // Remove overflow: hidden from framer-3gVIi dynamically
    await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('.framer-3gVIi');
        el.style.overflow = 'visible';
        el.style.overflowX = 'visible';
        el.style.overflowY = 'visible';
        el.style.display = 'block';
      })()`
    }, 3);

    // Now scroll to 600
    await cdpCall(ws, 'Runtime.evaluate', { expression: `window.scrollTo(0, 600);` }, 4);
    await new Promise(r => setTimeout(r, 800));

    // Check c5 and phone rect!
    const evalRes = await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const phone = document.querySelector('[data-framer-name*="iPhone"]');
        const c5 = document.querySelector('.framer-c5emsp');
        return {
          scrollY: window.scrollY,
          c5Top: c5 ? c5.getBoundingClientRect().top : null,
          c5Position: c5 ? getComputedStyle(c5).position : null,
          phoneTop: phone ? phone.getBoundingClientRect().top : null
        };
      })()`,
      returnByValue: true
    }, 5);

    console.log('Result after fix at scroll 600:', JSON.stringify(evalRes.result.value, null, 2));

    // Capture screenshot at 600!
    const ss = await cdpCall(ws, 'Page.captureScreenshot', { format: 'png' }, 6);
    const fs = require('fs');
    fs.writeFileSync(`C:\\Users\\Vicky\\.gemini\\antigravity-ide\\brain\\14120e7a-1779-4cbf-9b75-d3deafcfe29b\\fixed_home_scroll_600.png`, Buffer.from(ss.data, 'base64'));
    console.log('Saved fixed_home_scroll_600.png');

    ws.close();
  } catch (e) {
    console.error(e);
  } finally {
    proc.kill();
  }
}

testFix();
