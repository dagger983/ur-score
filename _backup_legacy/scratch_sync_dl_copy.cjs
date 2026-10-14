const fs = require('fs');
let txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs', 'utf8');

const oldPhrase = 'Fast, secure, and credit health tracking\u2014powered by UR SCORE.';
const newPhrase = 'Your credit health, made simple. Understand your credit profile, build better financial habits, and take informed steps toward your credit goals.';

if (txt.includes(oldPhrase)) {
  txt = txt.replace(oldPhrase, newPhrase);
  fs.writeFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs', txt);
  console.log('Synchronized download copy in gtIORG.mjs!');
} else {
  console.log('Phrase not found');
}
