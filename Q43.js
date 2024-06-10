"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
// array of magician names
const Q42_1 = require("./Q42");
const Q42_2 = require("./Q42");
const Q42_3 = require("./Q42");
console.log("Original Array");
(0, Q42_2.showmagicians)(Q42_1.magician_Names);
console.log("Modify Array");
(0, Q42_2.showmagicians)(Q42_3.greatMagicianNames);
