import fs from 'node:fs/promises';
import path from 'path';

const pathFile =  path.resolve('src/fs/files/fileToRemove.txt');
const error = new Error('FS operation failed');

const remove = async () => {
  try {
    await fs.unlink(pathFile);
  } catch {
    console.log(error.message);
  }
};

await remove();
