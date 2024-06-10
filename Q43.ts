/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
// array of magician names
import { magician_Names } from "./Q42";
import { showmagicians } from "./Q42";
import { make_great } from "./Q42";
import { greatMagicianNames } from "./Q42";
console.log("Original Array");
showmagicians(magician_Names);
console.log("Modify Array");
showmagicians(greatMagicianNames);


