"use strict";
// 43 --- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great(magicians) {
    // Create a copy of the array
    let modifiedMagicians = [...magicians];
    // Modify the copy by adding "the Great" to each magician's name
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the Great " + modifiedMagicians[i];
    }
    // Return the modified copy
    return modifiedMagicians;
}
// Function to print the magician's names
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
let magician_names = ["Mohsin", "Asim", "Jawad", "Fawad"];
// Call make_great() with a copy of the array to leave the original array unchanged
let great_magicians = make_great([...magician_names]);
// Call show_magicians() with the original array and the modified copy
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
