"use strict";
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
// step 1: personName in lowercase
let person_name = "saWera munaWar";
let lowercaseName = person_name.toLowerCase();
console.log(lowercaseName);
// step 2: personName in uppercase
let uppercaseName = person_name.toUpperCase();
console.log(uppercaseName);
// step 3: personName in titlecase
let words = person_name.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
