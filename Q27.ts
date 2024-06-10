/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// version 1
console.log("If color is green");
let alien:string = "green"
if(alien === "green"){
    console.log("Congratulation! you just earned 5 points for shooting the alien.");
} else if(alien === "yellow"){
    console.log("Congratulation! you just earned 10 points for shooting the alien.");
} else if(alien === "red"){
    console.log("Congratulation! you just earned 15 points for shooting the alien.");
} else {
    console.log("Unknown alien color");
}
// version 2
console.log("If color is yellow");
alien = "yellow"
if(alien === "green"){
    console.log("Congratulation! you just earned 5 points for shooting the alien.");
} else if(alien === "yellow"){
    console.log("Congratulation! you just earned 10 points for shooting the alien.");
} else if(alien === "red"){
    console.log("Congratulation! you just earned 15 points for shooting the alien.");
} else {
    console.log("Unknown alien color");
}
// version 3
console.log("If color is red");
alien = "red"
if(alien === "green"){
    console.log("Congratulation! you just earned 5 points for shooting the alien.");
} else if(alien === "yellow"){
    console.log("Congratulation! you just earned 10 points for shooting the alien.");
} else if(alien === "red"){
    console.log("Congratulation! you just earned 15 points for shooting the alien.");
} else {
    console.log("Unknown alien color");
}
console.log("If color is unknown");
alien = "purple"
if(alien === "green"){
    console.log("Congratulation! you just earned 5 points for shooting the alien.");
} else if(alien === "yellow"){
    console.log("Congratulation! you just earned 10 points for shooting the alien.");
} else if(alien === "red"){
    console.log("Congratulation! you just earned 15 points for shooting the alien.");
} else {
    console.log("Unknown alien color");
}