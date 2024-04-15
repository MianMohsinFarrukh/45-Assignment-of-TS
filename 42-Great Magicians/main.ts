//  42 --- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.





function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great : ${magician}`);
}

// Function to print the magician's names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ["Mohsin", "Asim", "Penn Jawad", "Faizan"];

// Call make_great() to modify the array
magician_names = make_great(magician_names);

// Call show_magicians() to see the modified list
show_magicians(magician_names);














