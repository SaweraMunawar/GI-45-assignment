/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/

// array of favorite transportation
let favoriteTransport:Array< [transport:string,brand:string]> = []
// list to store several examples
favoriteTransport.push(["Motorcycle","Honda"])
favoriteTransport.push(["Car","Toyota"])
favoriteTransport.push(["Bicycle","Sohrab"])
//console.log(favoriteTransport);

// using foreach loop to print statement about these item
favoriteTransport.forEach(([transport,brand]) => {console.log(`"I would like to own a ${brand} ${transport}"`);}
)