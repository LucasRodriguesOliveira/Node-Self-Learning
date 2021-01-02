const url = new URL('https://example.org/abc?foo=~bar');

console.log(url.search);

url.searchParams.sort();

console.log(url.search);