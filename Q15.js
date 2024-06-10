"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestsList = void 0;
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
exports.guestsList = ["Izzah", "Sheeza", "Manal"];
let guestWhoNotCome = "Manal";
console.log(`${guestWhoNotCome} can't make it.`);
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newGuest = "Iqra";
let indexOfGuestWhoNotCome = exports.guestsList.indexOf(guestWhoNotCome);
if (indexOfGuestWhoNotCome) {
    exports.guestsList[indexOfGuestWhoNotCome] = newGuest;
}
//console.log(guestsList[2]);
//• Print a second set of invitation messages, one for each person who is still in your list.
console.log("A second set of invitation messages:");
exports.guestsList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited for dinner.`);
});
