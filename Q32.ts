/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let currentUsers: string[] = ["admin", "sawera", "iqra", "binesh","izzah"];
let newUsers: string[] = ["amna", "SAWERA", "iqra", "sheeza","zoha"];
function checkUserName( currentUsers:string[], newUsers:string[]): void{
    const lowerCasedcurrentUsers = currentUsers.map(user => user.toLowerCase());
for (let i of newUsers){
    const lowerCasedI = i.toLowerCase();
    if(lowerCasedcurrentUsers.includes(lowerCasedI)){
        console.log(`Username ${i} is already taken. Please choose a new username`);
    } else {
        console.log(`Username ${i} is available`);
    }
}
}
checkUserName(currentUsers, newUsers);

