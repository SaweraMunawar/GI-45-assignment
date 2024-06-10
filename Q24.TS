//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
let vegetable:string = "carrot";
console.log("Is vegetable equal to carrot?");
console.log(vegetable == "carrot"); // true
console.log("Is vegetable not equal to carrot?");
console.log(vegetable != "carrot"); // false

//• Tests using the lower case function
let upperCaseVege ="CARROT";
console.log("Is CARROT equal to carrot after converting to lowercase?");
console.log(upperCaseVege.toLowerCase() == vegetable);
console.log("Is CARROT not equal to carrot after converting to lowercase?");
console.log(upperCaseVege.toLowerCase() != vegetable);

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
let person1Age = 21;
let person2Age = 34;
console.log("Is person1 age equal to person2 age?");
console.log(person1Age == person2Age); // false
console.log("Is person1 age not equal to person2 age?");
console.log(person1Age != person2Age); // true
console.log("Is person1 age greater than person2 age?");
console.log(person1Age > person2Age); // false
console.log("Is person1 age less than person2 age?");
console.log(person1Age < person2Age); // true
console.log("Is person1 age greater than or equal to person2 age?");
console.log(person1Age >= person2Age); // false
console.log("Is person1 age less than or equal to person2 age?");
console.log(person1Age <= person2Age); // true

//• Tests using "and" and "or" operators
console.log("Is person1 age less than person2 age AND person 2 age is greater than person 1 age?");
console.log(person1Age < person2Age && person2Age > person1Age); // true
console.log("Is person1 age equal to person2 age and person 2 age is greater than person 1 age?");
console.log(person1Age == person2Age && person2Age > person1Age); // false
console.log("Is person1 age less than  person2 age OR person 2 age is greater than person 1 age?");
console.log(person1Age < person2Age || person2Age > person1Age); // true
console.log("Is person1 age equal to person2 age 'OR' person 2 age is greater than person 1 age?");
console.log(person1Age == person2Age || person2Age > person1Age); // true

//• Test whether an item is in a array
let fruitsArray = ["apple","banana","orange"]
console.log("Is banana include in array?");
console.log(fruitsArray.includes("banana")); // true

//• Test whether an item is not in a array
console.log("Is banana not include in array?");
console.log(!fruitsArray.includes("banana")); // false

