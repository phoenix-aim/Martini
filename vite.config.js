import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const fs = require('fs');
const path = require('path');

function readFiles(dir, processFile) {
  fs.readdir(dir, (error, fileNames) => {
    if (error) throw error;

    fileNames.forEach(filename => {
      const name = path.parse(filename).name;
      const ext = path.parse(filename).ext;
      const filepath = path.resolve(dir, filename);

      fs.stat(filepath, function(error, stat) {
        if (error) throw error;

        const isFile = stat.isFile();

        if (isFile) {
          processFile(filepath, name, ext, stat);
        }
      });
    });
  });
}

let images = [];

readFiles('./', (filepath, name, ext, stat) => {
  console.log('file path:', filepath);
  console.log('file name:', name);
  console.log('file extension:', ext);
});

console.log(images);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
