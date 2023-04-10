import fs from 'node:fs';
import path from 'path';

const filePath = path.resolve('src/streams/files/fileToWrite.txt');

const write = async () => {
    const stream = fs.createWriteStream(filePath);
    process.stdin.pipe(stream);
};

await write();