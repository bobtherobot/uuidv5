var uuidv5 = require("./uuidv5.js");

console.log( uuidv5("something", "url") );
console.log( uuidv5("something", "dns") );
console.log( uuidv5("something", "oid") );
console.log( uuidv5("something", "x500") );
console.log( uuidv5("something", "nil") );