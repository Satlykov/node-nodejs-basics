import fs from 'node:fs';
import path from 'path';
import zlib from 'zlib';

const filesPathArchive = path.resolve('src/zip/files/archive.gz');
const filesPathToCompress = path.resolve('src/zip/files/fileToCompress.txt');

const compress = async () => {
  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream(filesPathToCompress);
  const writeStream = fs.createWriteStream(filesPathArchive);
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
