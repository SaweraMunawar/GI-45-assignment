/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
 // create a function of fruits
 function CreateFruits( name:string, color:string, taste:string){
    return{
        name,
        color,
        taste
    };
 };
 // create an array of fruits
 const fruits = [
    CreateFruits("Apple", "Red","Sweet"),
    CreateFruits("Banana","Yellow","Sweet"),
    CreateFruits("Mango","Yellow","Sweet")
 ];
 // Access an invalid index
 const invalidIndex = 10; // there are only 3 elements in the array, so this will cause an error
 console.log(`fruits at index ${invalidIndex}`, fruits [invalidIndex]);
 // print the fruit
 fruits.forEach( (fruit) => {
    console.log(`Name:${fruit.name}, Color:${fruit.color},Taste:${fruit.taste} `);
 });
 

 
