import fs from 'node:fs/promises';
import path from 'path';

const pathFile = path.resolve('src/fs/files/fileToRead.txt');
const error = new Error('FS operation failed');

const read = async () => {
  try {
    const content = await fs.readFile(pathFile, {
      encoding: 'utf8',
    });
    console.log(content);
  } catch {
    console.log(error.message);
  }
};

await read();
