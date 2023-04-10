import os from 'os';
import wt from 'worker_threads';
import path from 'path';

const startNumber = 10;
const coreNumber = os.cpus().length;
const workerPath = path.resolve('src/wt/worker.js');

const performCalculations = async () => {
  const allWorkers = [];

  for (let i = 0; i < coreNumber; i++) {
    allWorkers.push(
      new Promise((resolve, reject) => {
        const worker = new wt.Worker(workerPath, {
          workerData: startNumber + i,
        });
        worker.on('message', resolve);
        worker.on('error', reject);
      })
    );
  }

  Promise.allSettled(allWorkers).then((res) => {
    res = res.map(
      (obj) =>
        ({
          status: obj.status === 'fulfilled' ? 'resolved' : 'error',
          data: obj.value ?? null,
        })
    );
    console.log(res);
  });
};

await performCalculations();
