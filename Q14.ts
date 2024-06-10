/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

// list of guests 
let guestList: Array<string>=["izzah","sheeza","manal"]
// using foreach loop to print a message to each person in list
guestList.forEach((guestname) => {
    console.log(`Dear ${guestname}, you are invited to dinner please join us`);
} )