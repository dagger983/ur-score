const { spawn } = require('child_process');
const fs = require('fs');

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

async function verifyAll() {
  const brainDir = "C:\\Users\\Vicky\\.gemini\\antigravity-ide\\brain\\14120e7a-1779-4cbf-9b75-d3deafcfe29b";

  // --- 1. Verify Features page AI card and bottom ---
  const port1 = 9240;
  const proc1 = spawn(edge, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port1}`,
    'http://localhost:5000/payer.framer.website/features'
  ]);
  await new Promise(r => setTimeout(r, 2000));

  try {
    const res1 = await fetch(`http://127.0.0.1:${port1}/json`);
    const tabs1 = await res1.json();
    const page1 = tabs1.find(t => t.url.includes('features'));
    const ws1 = new WebSocket(page1.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws1.onopen = res; ws1.onerror = rej; });

    let id = 1;
    function send1(method, params = {}) { return cdpCall(ws1, method, params, id++); }
    await send1('Runtime.enable');
    await send1('Page.enable');

    // Scroll to AI card (around 1500px)
    await send1('Runtime.evaluate', { expression: `window.scrollTo(0, 1500);` });
    await new Promise(r => setTimeout(r, 800));
    const ssAi = await send1('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${brainDir}\\final_features_ai_card.png`, Buffer.from(ssAi.data, 'base64'));
    console.log('Saved final_features_ai_card.png');

    // Scroll to bottom of features
    await send1('Runtime.evaluate', { expression: `window.scrollTo(0, 2600);` });
    await new Promise(r => setTimeout(r, 800));
    const ssFooter = await send1('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${brainDir}\\final_features_footer.png`, Buffer.from(ssFooter.data, 'base64'));
    console.log('Saved final_features_footer.png');

    ws1.close();
  } catch (e) {
    console.error('Features verify error:', e);
  } finally {
    proc1.kill();
  }

  // --- 2. Verify Home page phone scroll sequence ---
  const port2 = 9241;
  const proc2 = spawn(edge, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port2}`,
    'http://localhost:5000/payer.framer.website/'
  ]);
  await new Promise(r => setTimeout(r, 2000));

  try {
    const res2 = await fetch(`http://127.0.0.1:${port2}/json`);
    const tabs2 = await res2.json();
    const page2 = tabs2.find(t => t.url === 'http://localhost:5000/payer.framer.website/');
    const ws2 = new WebSocket(page2.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws2.onopen = res; ws2.onerror = rej; });

    let id = 1;
    function send2(method, params = {}) { return cdpCall(ws2, method, params, id++); }
    await send2('Runtime.enable');
    await send2('Page.enable');

    const scrollSteps = [0, 600, 1200, 1800];
    for (const s of scrollSteps) {
      await send2('Runtime.evaluate', { expression: `window.scrollTo(0, ${s});` });
      await new Promise(r => setTimeout(r, 800));
      const ssHome = await send2('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${brainDir}\\final_home_step_${s}.png`, Buffer.from(ssHome.data, 'base64'));
      console.log(`Saved final_home_step_${s}.png`);
    }

    ws2.close();
  } catch (e) {
    console.error('Home verify error:', e);
  } finally {
    proc2.kill();
  }

  console.log('Verification captures complete!');
}

verifyAll();
