"use strict";
const countries = [
    {
        name: "Pakistan",
        population: 244625792,
        capital: "Islamabad",
        continent: "South Asia"
    },
    {
        name: "Iran",
        population: 89732743,
        capital: "Tehran ",
        continent: "Western Asia"
    },
    {
        name: "Afghanistan",
        population: 43226325,
        capital: "Kabul",
        continent: "South Asia"
    }
];
// print the list of countries
console.log("List Of Countries:");
countries.forEach(country => {
    console.log(`Name:${country.name}, Population:${country.population}, Capital:${country.capital},Continent:${country.continent}`);
});
