"use strict";
// 17 --- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// 16 --- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// //Point 01 ex = 16:
const guestList = ['Ali', 'Ahmed', 'Faizan'];
let guest = "Faizan";
let newGuest = "Irfan";
guestList[guestList.indexOf(guest)] = newGuest;
console.log(guestList);
guestList.map((items) => console.log(`Dear ${items} ,I found a bigger dinner table so I am invited more peoples.`));
//Point 02 Began:
let moreGuest = "Asim";
guestList.unshift(moreGuest);
console.log(guestList);
//Point 03 Middle:
let middleGuest = "Khalid";
let middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, middleGuest);
console.log(guestList);
//Point 04 append:
guestList.push("Hamza");
console.log(guestList);
//Point 05 invitation messages :
guestList.forEach(person => {
    console.log(`\nDear ${person},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely,\nMian Mohsin Farrukh`);
});
// Assignment no : 17 ;
// point no : 01 ;
// Add a new line that prints a message saying that you can invite only two people for dinner.
guestList.forEach(person => {
    console.log(`\nDear ${person}\nUnfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.\n`);
});
// point no : 02 ;
// Remove guests from the list one at a time until only two names remain .
// while (guestList.length > 2) {
//     const removedGuest = guestList.pop();
//     console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
// }
// point no : 03 ;
// Print a message to each of the two people still on your list, letting them know they're still invited.
guestList.forEach(person => {
    console.log(`\nDear ${person},\nYou are still invited to dinner. We're looking forward to seeing you!\n`);
});
// point no : 04 ;
// Remove the last two names from your list, so you have an empty list
guestList.splice(4, 2);
// Print your list to make sure you actually have an empty list at the end of your program
console.log(`Final guest list : ${guestList}`);
