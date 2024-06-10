"use strict";
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping.*/
// person's name with whitespace character
let person_Name = "\t SAWERA MUNAWAR \n";
console.log("Name with whitespace: " + person_Name);
// stripped name 
let strippedName = person_Name.trim();
console.log("stripped Name: " + strippedName);
