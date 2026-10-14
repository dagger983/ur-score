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

async function inspect(url) {
  const port = 9226;
  const proc = spawn(edge, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    url
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const res = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await res.json();
    const page = tabs.find(t => t.url.includes('payer.framer.website'));
    if (!page) {
      console.log('No page tab found');
      return;
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    // Capture console errors
    ws.addEventListener('message', (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('[BROWSER LOG]', msg.params.type, msg.params.args.map(a => a.value || a.description));
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        console.log('[BROWSER ERROR]', msg.params.exceptionDetails);
      }
    });

    await cdpCall(ws, 'Runtime.enable', {}, 1);
    await cdpCall(ws, 'Console.enable', {}, 2);

    // Evaluate DOM query
    const evalRes = await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const phone = document.querySelector('[data-framer-name*="iPhone"], [data-framer-name*="Phone"]');
        const footer = document.querySelector('footer');
        const f112 = document.querySelector('.framer-112cift-container');
        return {
          phone: phone ? {
            name: phone.getAttribute('data-framer-name'),
            rect: phone.getBoundingClientRect(),
            visible: phone.offsetWidth > 0 && phone.offsetHeight > 0,
            styleDisplay: getComputedStyle(phone).display,
            position: getComputedStyle(phone).position
          } : null,
          footer: footer ? {
            rect: footer.getBoundingClientRect(),
            visible: footer.offsetWidth > 0 && footer.offsetHeight > 0,
            display: getComputedStyle(footer).display
          } : null,
          f112: f112 ? {
            rect: f112.getBoundingClientRect(),
            position: getComputedStyle(f112).position,
            display: getComputedStyle(f112).display
          } : null,
          scrollHeight: document.body.scrollHeight,
          windowHeight: window.innerHeight
        };
      })()`,
      returnByValue: true
    }, 3);

    console.log('Eval result:', JSON.stringify(evalRes.result.value, null, 2));

    // Now let's test scroll on Home page
    await cdpCall(ws, 'Runtime.evaluate', {
      expression: `window.scrollTo(0, 1500);`
    }, 4);
    await new Promise(r => setTimeout(r, 800));

    const evalAfterScroll = await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const phone = document.querySelector('[data-framer-name*="iPhone"], [data-framer-name*="Phone"]');
        return {
          scrollY: window.scrollY,
          phoneRect: phone ? phone.getBoundingClientRect() : null
        };
      })()`,
      returnByValue: true
    }, 5);

    console.log('After scroll result:', JSON.stringify(evalAfterScroll.result.value, null, 2));

    ws.close();
  } catch (e) {
    console.error('Error:', e);
  } finally {
    proc.kill();
  }
}

inspect('http://localhost:5000/payer.framer.website/');
