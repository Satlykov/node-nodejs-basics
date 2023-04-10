import fs from 'node:fs/promises';
import path from 'path';

const filePath = path.resolve('src/fs/files/fresh.txt');
const error = new Error('FS operation failed');

const create = async () => {
  try {
    await fs.access(filePath);
    console.log(error.message);
  } catch {
    await fs.open(filePath, 'w');
    await fs.appendFile(filePath, 'I am fresh and young');
  }
};

await create();
