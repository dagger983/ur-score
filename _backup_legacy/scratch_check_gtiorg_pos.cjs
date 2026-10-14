const fs = require('fs');
const content = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs', 'utf8');

let pos = 0;
while ((pos = content.indexOf('framer-ymqvgx', pos)) !== -1) {
  console.log('Pos:', pos);
  console.log(content.substring(Math.max(0, pos - 60), Math.min(content.length, pos + 150)));
  pos += 'framer-ymqvgx'.length;
}
