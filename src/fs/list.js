import fs from 'node:fs/promises';
import path from 'path';

const absolutePath = path.resolve('src/fs/files');
const error = new Error('FS operation failed');

const list = async () => {
  try {
    const files = await fs.readdir(absolutePath);
    console.dir(files);
  } catch {
    console.log(error.message);
  }
};

await list();
