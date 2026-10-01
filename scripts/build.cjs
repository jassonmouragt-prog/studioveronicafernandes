'use strict';

const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public');
const files = [
  'index.html', 'styles.css', 'content.js', 'app.js',
  'banner hero desktop.png', 'banner hero mobile.png',
  'imagem sobre a profissional.png',
  'logo produto fundo claro.png', 'logo produto fundo escuro.png',
  'Selo Premium 7 Dias Garantia.png'
];

// Valida todos os arquivos antes de gerar a saída de publicação.
for (const file of files) fs.accessSync(path.join(root, file));
fs.accessSync(path.join(root, 'assets'));
fs.mkdirSync(output, { recursive: true });
for (const file of files) fs.copyFileSync(path.join(root, file), path.join(output, file));
fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
console.log(`Site estático preparado em public/ (${files.length} arquivos + assets).`);
