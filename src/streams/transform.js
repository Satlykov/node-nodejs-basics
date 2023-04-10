import stream from 'stream';

class ReverseTransform extends stream.Transform {
  _transform(data, _, callback) {
    this.push(data.toString().split('').reverse().join(''));
    callback();
  }
}

const transform = async () => {
  let readStream = process.stdin;
  let writeStream = process.stdout;
  let transformStream = new ReverseTransform();
  readStream.pipe(transformStream).pipe(writeStream);
};

await transform();
