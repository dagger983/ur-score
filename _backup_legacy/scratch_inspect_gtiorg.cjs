const fs = require('fs');
const filePath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const content = fs.readFileSync(filePath, 'utf8');

['framer-ymqvgx', 'framer-8ijbq0', 'framer-1b0qxq6', 'framer-19xlp0i'].forEach(cls => {
  let idx = 0;
  while ((idx = content.indexOf('.' + cls, idx)) !== -1) {
    console.log('CSS rule for .' + cls + ':');
    console.log(content.substring(idx, content.indexOf('}', idx) + 1));
    idx += cls.length + 1;
  }
});
