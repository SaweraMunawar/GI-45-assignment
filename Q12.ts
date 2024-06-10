/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/

// Exercise 11
let friendsNames:string[]=["sawera","sheeza","izzah","amna","manal","aruba","ibtisam","ania"]

// print a personalized message for each friend
for(let name of friendsNames){
    console.log(`Good morning ${name}, "I hope you are having a fantastic day!"`); 
}
