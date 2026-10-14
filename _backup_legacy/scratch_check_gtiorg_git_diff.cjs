const { execSync } = require('child_process');

try {
  const diff = execSync('git diff -U1 payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs', { encoding: 'utf8' });
  console.log('Diff snippet:');
  const lines = diff.split('\n');
  console.log(lines.slice(0, 40).join('\n'));
  console.log('--- end of diff lines ---');
  console.log(lines.slice(-40).join('\n'));
} catch (e) {
  console.log('Error getting diff:', e.message);
}
