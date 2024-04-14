// 23 --- Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// Test :01 ;
let car: string = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');


// Test :02 ;
let myCar: string = "subaru";
console.log("Is myCar != 'Toyota'? I predict True.");
console.log(myCar == 'subaru');


// Test :03 ;
let honda: string = "subaru";
console.log("Is honda != 'Toyota'? I predict false.");
console.log(honda == 'subaru');

// Test :04 ;
let capital: string = "SUBARU";
console.log("Is capital == 'Toyota'? I predict True.");
console.log(capital != 'subaru');

// Test :05 ;
let newItem: string = "Honda";
console.log("Is newItem == 'Toyota'? I predict True.");
console.log(newItem == 'Honda');







// Test :06 ;
let carLength: string = "Honda";
console.log("Is carLength.length == 8? I predict True.");
console.log(carLength.length == 6);


// Test :07 ;
let newCar: string = "Honda";
console.log("Is newCar == 'Toyota'? I predict True.");
console.log(newCar == "Toyota");


// Test :08 ;
let oldCar: string = "subaru";
console.log("Is oldCar == 'Toyota'? I predict True.");
console.log(oldCar == "Toyota");



// Test :09 ;
let n1: number = 25;
let n2: number = 27;
console.log("Is n1 : '25' == n2 : '27' ? I predict True.");
console.log(n1 == n2);

// Test : 10 ;
let no1: number = 50;
let no2: any = 50;
console.log("Is no1 : '50' !== no2 : '50' ? I predict True.");
console.log(no1 !== no2);