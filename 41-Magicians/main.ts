//41 --- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.






function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ["Mohsin", "Asim", "Jawad", "Farhan"];

// Calling the function and passing the array
show_magicians(magician_names);
