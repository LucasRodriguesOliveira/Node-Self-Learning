/*
Returns the operating system as a string.

On POSIX systems, the operating system release is determined by calling uname(3).
On Windows, GetVersionExW() is used. See https://en.wikipedia.org/wiki/Uname#Examples for more information.
*/

const os = require('os');
console.log(os.release());