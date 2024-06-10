"use strict";
/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let userNames = ["admin", "sawera", "iqra", "binesh", "izzah"];
function greetings() {
    if (userNames.length == 0) {
        console.log("We need to find some users");
    }
    for (let i of userNames) {
        if (i == "admin") {
            console.log(`Hello ${i}, would you like to see a report?`);
        }
        else {
            console.log(`Hello ${i},thank you for logging in again.`);
        }
    }
}
greetings();
//console.log('/n/n for empty array/n');
//userNames = [];
//greetings();
