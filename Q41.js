"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
const magicianNames = ["David Blaine", "Dynamo", "Teller", "John"];
function show_magician(magicians) {
    for (const magician of magicianNames) {
        console.log(magician);
    }
}
// call function
show_magician(magicianNames);
