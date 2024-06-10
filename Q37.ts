/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size: string = "large", message: string = "I love TypeScript"){
    console.log(`Size: ${size} \nMessage: ${message}`);
}
// shirt that are by default sized and message
console.log("Shirt that are by default sized and message");
make_shirt();
// shirt with a different size
console.log("Shirt with a different size");
make_shirt("medium");
// shirt with a different size and message
console.log("Shirt with a different size and message");
make_shirt("small","'Be Yourself; Everyone Else is Already Taken'")
