/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

let favoritePizza: string[] =["pepperoni","chicken","cheese"];
// print the name of each pizza
for (let i=0;i<favoritePizza.length; i++){
    console.log(`${favoritePizza[i]}`);
}
// print a sentence using the name of the pizza
for (let i =0; i<favoritePizza.length; i++){
     console.log(`I like ${favoritePizza[i]} pizza`);
}
console.log(`I like ${favoritePizza[2]} pizza because it's simple and delicious. The combination of a crispy crust, rich tomato sauce, and gooey melted cheese makes every bite satisfying. It's a classic choice that never disappoints. I really love pizza!`);

