const { exec } = require('child_process');

const edge = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';
const url = 'http://localhost:5000/payer.framer.website/download';

exec(`${edge} --headless=new --dump-dom ${url}`, { maxBuffer: 10 * 1024 * 1024 }, (err, stdout) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Dumped DOM length:', stdout.length);
  const footerIdx = stdout.indexOf('<footer');
  console.log('Footer in dumped DOM:', footerIdx);
  if (footerIdx !== -1) {
    console.log(stdout.substring(footerIdx - 100, footerIdx + 300));
  }
});
