/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

// step 1: personName in lowercase
let person_name:string = "saWera munaWar";
let lowercaseName:string = person_name.toLowerCase();
console.log(lowercaseName);

// step 2: personName in uppercase
let uppercaseName: string= person_name.toUpperCase();
console.log(uppercaseName);

// step 3: personName in titlecase
let words:string[] = person_name.split(" ")
let titlecaseName:string=""
    for(let i=0 ;i<words.length; i++){
       titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()+" "
    }

console.log(titlecaseName);



