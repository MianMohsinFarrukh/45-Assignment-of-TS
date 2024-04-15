"use strict";
// 31 --- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// 1• If the list is empty, print the message We need to find some users!
// 2• Remove all of the usernames from your array, and make sure the correct message is printed.
// 1• If the list is empty, print the message We need to find some users!
let userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let userName of userNames) {
        if (userName === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userName}, thank you for logging in again.`);
        }
    }
}
;
// 2• Remove all of the usernames from your array, and make sure the correct message is printed.
let myName = ["Admin", "Mohsin", "Asim", "Ali", "Jawad"];
if (myName.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let yourName of myName) {
        if (yourName === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${yourName}, thank you for logging in again.`);
        }
    }
}
;
