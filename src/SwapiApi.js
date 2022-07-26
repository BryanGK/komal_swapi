// import axios from "axios";

// function getData() {
//   const chData = axios.get("https://swapi.dev/api/people/");
//   console.log(chData);
// }

// getData();

// import axios from "axios";

// export default async function SwapiApi() {
//   const swapiURL = await fetch("https://swapi.dev/api/");
//   console.log(swapiURL);
//   const response = await swapiURL.json();
//   console.table("res: ", response);
//   const peopleURL = await fetch(response.people);
//   console.log("peopleURL: ", peopleURL);
//   const peopleJSON = await peopleURL.json();
//   console.log("peopleJSON: ", peopleJSON);
//   for (let i = 0; i < 10; i++) {
//     // const nameValue = await peopleJSON.results[i].name
//     const speciesValue = await peopleJSON.results[i].species;
//     if (speciesValue.length !== 0) {
//       console.log(speciesValue);
//     }
//   }
// }

//QUESTIONS

//1. How to use axios with async/await
//2. How to use the axios with state
//3. How to use the axios with useEffect
//4. How to display data from the Array on the screen inside the table
//5. How to search the data from the array
