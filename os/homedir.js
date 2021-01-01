/*
Returns the string path of the current user's home directory.

On POSIX, it uses the $HOME environment variable if defined.
Otherwise it uses the effective UID to look up the user's home directory.

On Windows, it uses the USERPROFILE environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.
*/

const OS = require('os');

console.log(OS.homedir());