const parseEnv = () => {
  const params = [];
  for (const param in process.env) {
    param.startsWith('RSS_')
      ? params.push(`${param}=${process.env[param]}`)
      : null;
  }
  console.log(params.join('; '));
};

parseEnv();
