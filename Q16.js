"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guests = ["Sheeza", "Izzah", "Amna", "Manal", "Aruba", "Ibtisam"];
guests.forEach((guest) => {
    console.log(`Hello ${guest}, I found a bigger table for dinner.`);
});
//• Add one new guest to the beginning of your array.
let newGuestAtBegining = "Ania";
guests.unshift(newGuestAtBegining);
console.log(guests);
//• Add one new guest to the middle of your array. 
let newGuestInMiddle = "Sawera";
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuestInMiddle);
console.log(guests);
//• Use append() to add one new guest to the end of your list.
let newGuestAtEnd = "Iqra";
guests.push(newGuestAtEnd);
console.log(guests);
//• Print a new set of invitation messages, one for each person in your list.
console.log("A new set of invitation messages:");
for (let guest of guests) {
    console.log(`Dear ${guest} you are invited to dinner.`);
}
