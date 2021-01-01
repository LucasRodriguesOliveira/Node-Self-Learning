//Returns the scheduling priority for the process specified by pid.
//If pid is not provided or is 0, the priority of the current process is returned.
const OS = require('os');
console.log(OS.getPriority());