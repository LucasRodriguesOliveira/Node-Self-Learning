/*
Returns a string identifying the operating system platform.
The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'.

The return value is equivalent to process.platform.

The value 'android' may also be returned if Node.js is built on the Android operating system.
Android support is experimental.
*/

const os = require('os');

console.log(os.platform());