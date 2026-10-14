const http = require('http');

// Let's inspect the download page using Edge headless with DOM metrics
const { exec } = require('child_process');
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tmp = `${process.env.TEMP}\\edge-check-${Math.random()}`;

// We can run a small script via powershell
