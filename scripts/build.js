'use strict';

const fs = require('node:fs');
const { calculateTotal } = require('../src/bill');
const { version } = require('../package.json');

const sample = calculateTotal(1000, 10, 5);
const commit = process.env.GITHUB_SHA || 'local build';

const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>CI/CD Demo</title></head>
<body>
  <h1>CI/CD Demo v${version}</h1>
  <p>Sample bill: subtotal 1000, discount 10%, tax 5%</p>
  <p>Total: ${sample.total}</p>
  <p>Built from commit: ${commit}</p>
</body>
</html>
`;

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Build complete: dist/index.html');
