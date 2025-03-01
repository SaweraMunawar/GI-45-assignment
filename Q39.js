"use strict";
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
const city_country = (city, country) => {
    return `"${city}, ${country}"`;
};
// call function with three city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("Tokyo", "Japan"));
