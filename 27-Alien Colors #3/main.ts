// 27 --- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// 1• If the alien is green, print a message that the player earned 5 points.

// 2• If the alien is yellow, print a message that the player earned 10 points.

// 3• If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.




// 1• If the alien is green, print a message that the player earned 5 points.

let alien_color: string = "green";

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
} else {
    console.log(" Error! ")
};



// 2• If the alien is yellow, print a message that the player earned 10 points.

let alien: string = "yellow";

if (alien === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (alien === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (alien === 'red') {
    console.log("Congratulations! You just earned 15 points.");
} else {
    console.log(" Error! ")
};


// 3• If the alien is red, print a message that the player earned 15 points.

let color: string = 'red';

if (color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else if (color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
} else if (color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
} else {
    console.log(" Error! ")
};
