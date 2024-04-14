// 22 --- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


const countries: string[] = ["China", "Pakistan", "Iran", "Turkey", "India", "Russia", "Afghanistan"]

// console.log(countries{7});   //main.ts:6:24 - error TS1005: ':' expected.
//  6 console.log(countries{7});
// Found 2 errors in the same file, starting at: main.ts:6


console.log(countries[6]);


