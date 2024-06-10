/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
const favorite_fruits :string[] =["Mango","Orange","Grapes"];

// check for specific fruit using indepedent if statement
if(favorite_fruits.includes("apple")){console.log("I like apple");}
if(favorite_fruits.includes("Orange")){console.log("Orange is tasty");}
if(favorite_fruits.includes("banana")){console.log("I love banana");}
if(favorite_fruits.includes("Mango")){console.log("Mango is one of my favorite");}
if(favorite_fruits.includes("Grapes")){console.log("I like Grapes");}