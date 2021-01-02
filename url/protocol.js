const url = new URL('https://example.org');

console.log(url.protocol);

url.protocol = 'ftp';
console.log(url.href);
console.log(url.protocol);