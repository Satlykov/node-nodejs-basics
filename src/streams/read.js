import fs from 'node:fs/promises';
import path from 'path';

const filePath = path.resolve('src/streams/files/fileToRead.txt');

const read = async () => {
  fs.open(filePath)
    .then((file) => file.createReadStream())
    .then((stream) => stream.pipe(process.stdout));
};

await read();
