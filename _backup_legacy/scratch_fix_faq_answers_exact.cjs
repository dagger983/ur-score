const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs';
let txt = fs.readFileSync(mjsFile, 'utf8');

// Target 1
const target1 = 'Most transfers are instant, but bank processing times may vary. International payments can take 1\\u20133 business days.';
const newA1 = 'Never. Checking your score on UR Score is an official soft inquiry synced with credit bureaus. Soft pulls never impact your credit score or leave negative marks on your report.';

// Target 4
const target4 = 'Domestic transfers are free, while international transactions may have a small processing fee. You\\u2019ll always see the fee before confirming your payment.';
const newA4 = 'Our AI analyzes your credit utilization, payment history, and active accounts to provide tailored, step-by-step recommendations—such as prepaying ₹14,000 to unlock +22 points by next cycle.';

console.log('Contains target 1:', txt.includes(target1));
console.log('Contains target 4:', txt.includes(target4));

if (txt.includes(target1)) {
  txt = txt.replace(target1, newA1);
} else {
  console.log('Regex replacing target 1...');
  txt = txt.replace(/Most transfers are instant[^\"]+business days\./, newA1);
}

if (txt.includes(target4)) {
  txt = txt.replace(target4, newA4);
} else {
  console.log('Regex replacing target 4...');
  txt = txt.replace(/Domestic transfers are free[^\"]+confirming your payment\./, newA4);
}

fs.writeFileSync(mjsFile, txt, 'utf8');
console.log('Successfully fixed FAQ answers in PA9P1 mjs!');
