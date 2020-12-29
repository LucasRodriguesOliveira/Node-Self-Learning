console.log('Something happens here...');
Promise.resolve('Promise resolved').then(console.log);
setTimeout(() => console.log('Timeout'), 2000);

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});