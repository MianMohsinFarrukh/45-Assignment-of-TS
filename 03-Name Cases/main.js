"use strict";
// 03 --- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = 'Muhammad ali';
console.log(`${personName}`.toLowerCase()); // person name in lowercase .
console.log(`${personName}`.toUpperCase()); // person name in uppercase .
console.log(`${personName}`.charAt(0).toUpperCase() + `${personName}`.slice(1)); //person name in titlecase .
