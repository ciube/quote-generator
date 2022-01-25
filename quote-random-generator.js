const data = require('./quotes.json');

let index = Math.floor(Math.random() * data.quotes.length);

console.log(data.quotes.length)
console.log(index)

console.log("Quote", data.quotes[index].quote);
console.log("Author", data.quotes[index].author);