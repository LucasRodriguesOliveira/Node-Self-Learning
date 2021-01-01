const p1 = new Promise(r => r('p1 done'));
const p2 = new Promise(r => r('p2 done'));

Promise.race([p1, p2]).then(r => console.log(r));

process.on('multipleResolves', (t, p, r) => {
  console.error(t, p, r);
  setImmediate(() => process.exit(1));
});