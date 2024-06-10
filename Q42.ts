/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/ 
export const magician_Names: string[] =["David Blaine","Dynamo","Teller","John"]
export function showmagicians(magicians: string[]): void {
    for ( const magician of magicians){
        console.log(magician); 
    }
}
export function make_great(magicians:string[]):string[] {
    const greatMagicians: string[] = magicians.map(magician =>`the great ${magician}`);
    return greatMagicians;
}
// modify array
export const greatMagicianNames: string[]= make_great(magician_Names); 
console.log("original names");
showmagicians(magician_Names);
console.log("Magician with modifications");
showmagicians(greatMagicianNames);



