const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const root = path.resolve(__dirname);

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.mjs': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

function resolveFile(candidate) {
  if (fs.existsSync(candidate)) {
    if (fs.statSync(candidate).isDirectory()) {
      const idx = path.join(candidate, 'index.html');
      if (fs.existsSync(idx) && !fs.statSync(idx).isDirectory()) {
        return idx;
      }
    } else {
      return candidate;
    }
  }
  const withHtml = candidate + '.html';
  if (fs.existsSync(withHtml) && !fs.statSync(withHtml).isDirectory()) {
    return withHtml;
  }
  return null;
}

const server = http.createServer((req, res) => {
  let decodedPath = decodeURI(req.url.split('?')[0]);
  
  // Normalize paths
  if (decodedPath === '/' || decodedPath === '') {
    decodedPath = '/index.html';
  }

  // Redirect deleted careers requests to home
  if (decodedPath === '/careers' || decodedPath === '/careers.html' || decodedPath.startsWith('/careers/')) {
    res.writeHead(302, { 'Location': '/' });
    res.end();
    return;
  }

  // Handle framerusercontent paths whether relative or absolute
  if (decodedPath.includes('framerusercontent.com')) {
    const after = decodedPath.slice(decodedPath.indexOf('framerusercontent.com'));
    decodedPath = '/' + after;
  }

  // Try finding file directly in root
  const relPath = decodedPath.startsWith('/') ? decodedPath.slice(1) : decodedPath;
  let resolved = resolveFile(path.join(root, relPath));

  // Fallback: 404
  if (!resolved) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + req.url);
    return;
  }

  const ext = path.extname(resolved).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*'
  });
  fs.createReadStream(resolved).pipe(res);
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`;
  console.log(`\n======================================================`);
  console.log(`  UR SCORE Clean Root Engine!`);
  console.log(`  URL: ${url}`);
  console.log(`  Folder: ${root}`);
  console.log(`  Animations & Framer Motion: 100% ACTIVE`);
  console.log(`  Hosting Ready: YES (Standard static web structure)`);
  console.log(`======================================================\n`);
});
