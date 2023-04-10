import fs from 'node:fs/promises';
import path from 'path';

const wrongFilenamePath = path.resolve('src/fs/files/wrongFilename.txt');
const properFilenamePath = path.resolve('src/fs/files/properFilename.md');
const error = new Error('FS operation failed');

const rename = async () => {
  try {
    await fs.access(wrongFilenamePath);
  } catch {
    console.log(error.message);
    return;
  }

  try {
    await fs.access(properFilenamePath);
    console.log(error.message);
  } catch {
    await fs.rename(wrongFilenamePath, properFilenamePath);
  }
};

await rename();
