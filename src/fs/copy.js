import fs from 'node:fs/promises';
import path from 'path';

const filesPath = path.resolve('src/fs/files');
const copyFilesPath = path.resolve('src/fs/files_copy');
const error = new Error('FS operation failed');

const copy = async () => {
  try {
    await fs.access(filesPath);
  } catch {
    console.log(error.message);
    return;
  }

  try {
    await fs.access(copyFilesPath);
    console.log(error.message);
  } catch {
    await fs.cp(filesPath, copyFilesPath, { recursive: true });
  }
};

await copy();
