const myUrl = new URL('http://teste.com/teste#minhahash');

console.log(myUrl.hash);

myUrl.hash = 'teste';
console.log(myUrl.hash);