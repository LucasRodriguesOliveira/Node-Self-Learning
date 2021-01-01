/*
Returns an object containing network interfaces that have been assigned a network address.

Each key on the returned object identifies a network interface.
The associated value is an array of objects that each describe an assigned network address.
 */

const os = require('os');

console.log(os.networkInterfaces());