"use strict";
// 16 --- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//Point 01 ex = 15:
const guestList = ['Ali', 'Ahmed', 'Faizan'];
let guest = "Faizan";
let newGuest = "Irfan";
guestList[guestList.indexOf(guest)] = newGuest;
console.log(guestList);
// guestList.map((items)=>console.log(`Dear ${items} ,I found a bigger dinner table so I am invited more peoples.`))
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
