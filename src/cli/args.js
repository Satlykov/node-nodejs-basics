const parseArgs = () => {
  const args = process.argv.slice(2);

  const mapArgs = args
    .map((str) => (str.startsWith('--') ? str.slice(2) + ' is ' : str))
    .map((el, i) => (i % 2 !== 0 && i !== args.length - 1 ? el + ', ' : el));

  console.log(mapArgs.join(''));
};

parseArgs();
