"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greatMagicianNames = exports.make_great = exports.showmagicians = exports.magician_Names = void 0;
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
exports.magician_Names = ["David Blaine", "Dynamo", "Teller", "John"];
function showmagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
exports.showmagicians = showmagicians;
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the great ${magician}`);
    return greatMagicians;
}
exports.make_great = make_great;
// modify array
exports.greatMagicianNames = make_great(exports.magician_Names);
console.log("original names");
showmagicians(exports.magician_Names);
console.log("Magician with modifications");
showmagicians(exports.greatMagicianNames);
