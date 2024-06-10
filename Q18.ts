//Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the locations in a array. Make sure the array is not in alphabetical order.
let travelDestination:Array<string> = ["Turkey","Saudia Arabia","Japan","Korea","North Pakistan"];

//• Print your array in its original order.
console.log("\nArray in original order:")
console.log(travelDestination);

//• Print your array in alphabetical order without modifying the actual list.
console.log("\nArray in alphabetical order:")
console.log(travelDestination.sort());

//• Show that your array is still in its original order by printing it.
console.log("\nShowing array is still in its original order:")
console.log(travelDestination);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nArray in reverse alphabetical order:")
console.log(travelDestination.sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order:")
console.log(travelDestination);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse the order");
travelDestination.reverse()
console.log(travelDestination);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to its original order");
travelDestination.reverse()
console.log(travelDestination);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nSort array in alphabatic order");
travelDestination.sort()
console.log(travelDestination);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nSort array in reverse alphabatic order");
travelDestination.sort().reverse()
console.log(travelDestination);
