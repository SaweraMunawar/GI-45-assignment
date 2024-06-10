/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
interface country{
    name:string,
    population:number,
    capital:string
    continent:string
}
 const countries:country[]=[
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
 countries.forEach( country => {
   console.log(`Name:${country.name}, Population:${country.population}, Capital:${country.capital},Continent:${country.continent}`);
 });
