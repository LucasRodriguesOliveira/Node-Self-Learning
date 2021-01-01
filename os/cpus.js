//Returns an array of objects containing information about each logical CPU core.
const OS = require('os');

console.log('Total cpus: ', OS.cpus().length);
console.log(OS.cpus());
