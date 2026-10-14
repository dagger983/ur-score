const { spawn } = require('child_process');
const fs = require('fs');
const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const brainDir = 'C:/Users/Vicky/.gemini/antigravity-ide/brain/14120e7a-1779-4cbf-9b75-d3deafcfe29b';

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
  const port = 9285;
  const proc = spawn(edge, ['--headless=new', '--disable-gpu', '--window-size=1440,900', '--remote-debugging-port=' + port, 'http://localhost:5000/payer.framer.website/features']);
  await new Promise(r => setTimeout(r, 2000));
  try {
    const res = await fetch('http://127.0.0.1:' + port + '/json');
    const tabs = await res.json();
    const page = tabs.find(t => t.type === 'page') || tabs[0];
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);
    let id = 1;
    function send(m, p) { return cdpCall(ws, m, p, id++); }
    await send('Runtime.enable');
    await send('Page.enable');
    
    // Scroll to feature cards
    await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 650);' });
    await new Promise(r => setTimeout(r, 800));

    // Capture Scenario 1 (Default)
    const ss1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(brainDir + '/live_interaction_scenario1.png', Buffer.from(ss1.data, 'base64'));
    console.log('Saved Scenario 1 screenshot');

    // Click Scenario 2: Clear Loan
    await send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('.sim-tab-btn[data-scenario="emi"]');
        if (btn) btn.click();
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    // Capture Scenario 2
    const ss2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(brainDir + '/live_interaction_scenario2.png', Buffer.from(ss2.data, 'base64'));
    console.log('Saved Scenario 2 screenshot');

    // Trigger chart scrub hover
    await send('Runtime.evaluate', {
      expression: `(() => {
        const wrap = document.querySelector('.sim-chart-wrap');
        if (wrap) {
          const rect = wrap.getBoundingClientRect();
          const evt = new MouseEvent('mousemove', {
            clientX: rect.left + rect.width * 0.55,
            clientY: rect.top + rect.height * 0.5,
            bubbles: true
          });
          wrap.dispatchEvent(evt);
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 200));

    const ss3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(brainDir + '/live_interaction_scrubbing.png', Buffer.from(ss3.data, 'base64'));
    console.log('Saved Scrubbing screenshot');

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    proc.kill();
  }
})();
