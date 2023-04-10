import cp from 'child_process';
import path from 'path';

const scriptPath = path.resolve('src/cp/files/script.js');

const spawnChildProcess = async (args) => {
  const child = cp.fork(scriptPath, args, {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
  });
  process.stdin.pipe(child.stdin);

  let isFirstRun = true;
  child.stdout.on('data', (data) => {
    process.stdout.write(data);
    if (!isFirstRun) {
      process.stdout.write('Type in anything: ');
    } else {
      isFirstRun = false;
    }
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
