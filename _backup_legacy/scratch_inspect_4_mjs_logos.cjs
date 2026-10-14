const fs = require('fs');
const path = require('path');

const dir = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk';
const files = [
  'script_main.4UR2MR5E.mjs',
  'HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs',
  '5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs',
  '8Nm7_wvcGLFdzSV1G1D4bKaLo9DKRlz3ydWkk7Vu2mg.USSSVTTB.mjs'
];

for (const file of files) {
  const fullPath = path.join(dir, file);
  const content = fs.readFileSync(fullPath, 'utf8');
  console.log(`\n================ ${file} ================`);
  const regex = /data-framer-name":"([^"]*Logo[^"]*)"/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const start = Math.max(0, m.index - 80);
    const end = Math.min(content.length, m.index + 200);
    console.log(`Found logo at ${m.index}:`, content.slice(start, end));
  }
}
