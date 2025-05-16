// const fs = require('fs');
import fs from 'fs'
// const path = require('path');
import path from 'path'

// Change this to the path of the file or directory you want to update
const targetPath = './dist';

function replaceExtensionsInFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const updatedCode = code.replace(
    /((import|export)\s.+?from\s+['"])(.+?)(\.ts)(['"])/g,
    (_, p1, _p2, p3, _ext, p5) => `${p1}${p3}.js${p5}`
  );

  if (updatedCode !== code) {
    fs.writeFileSync(filePath, updatedCode, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processPath(target) {
  const stats = fs.statSync(target);
  if (stats.isFile() && target.endsWith('.js')) {
    replaceExtensionsInFile(target);
  } else if (stats.isDirectory()) {
    fs.readdirSync(target).forEach(file => {
      const fullPath = path.join(target, file);
      processPath(fullPath);
    });
  }
}

processPath(targetPath);

