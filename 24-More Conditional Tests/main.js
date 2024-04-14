"use strict";
// 24 --- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// 1• Tests for equality and inequality with strings
// 2• Tests using the lower case function
// 3• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// 4• Tests using "and" and "or" operators
// 5• Test whether an item is in a array
// 6• Test whether an item is not in a array
// 1• Tests for equality and inequality with strings :
// inequality strings :
let name_1 = "Mohsin";
let name_2 = "Asim";
let name_3 = "Ali";
if (name_1 === name_2) {
    console.log(`Names are equal `);
}
else {
    console.log(`Names are  not equal `);
}
;
//equality strings :
if (name_1 != name_3) {
    console.log(`Names are equal `);
}
else {
    console.log(`Names are  not equal `);
}
;
// 2• Tests using the lower case function :
let string3 = "HELLO";
let string4 = "hello";
// Lowercase test
console.log(string3.toLowerCase() === string4);
// 3• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to :
let num1 = 25;
let num2 = 50;
// Equality and inequality tests :
console.log(num1 === num2);
console.log(num1 !== num2);
// Greater than and less than tests :
console.log(num1 > num2);
console.log(num1 < num2);
// Greater than or equal to and less than or equal to tests :
console.log(num1 >= num2);
console.log(num1 <= num2);
// 4• Tests using "and" and "or" operators
let a = 5;
let b = 10;
let c = 15;
// "and" operator test
console.log(a < b && b < c);
// "or" operator test
console.log(a < b || a > c);
// 5• Test whether an item is in a array :
let fruits = ["apple", "banana", "orange"];
// In array test
console.log(fruits.includes("banana"));
// 6• Test whether an item is not in a array:
let fruit = ["apple", "banana", "orange"];
// Not in array test
console.log(!fruit.includes("grape"));
