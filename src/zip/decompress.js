import zlib from 'zlib';
import fs from 'node:fs';
import path from 'path';

const filesPathArchive = path.resolve('src/zip/files/archive.gz');
const filesPathToCompress = path.resolve('src/zip/files/fileToCompress.txt');

const decompress = async () => {
  const unzip = zlib.createUnzip();
  const readStream = fs.createReadStream(filesPathArchive);
  const writeStream = fs.createWriteStream(filesPathToCompress);
  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
