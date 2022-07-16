import React from "react";
import axios from "axios";
import Header from "./modules/Header";
// import Table from "./modules/Table/Table";

export default function App() {
  // const [tableData, setTableData] = useState([]);
  // console.log(tableData);

  async function getCharacterData() {
    let swapiApi = await axios.get("https://swapi.dev/api/people");
    let response = await swapiApi.data;
    // console.log(response);
    let characterData = [];
    while (response.next) {
      characterData.push(response.results);
      swapiApi = await axios.get(response.next);
      response = await swapiApi.data;
      // console.log(characterData);
      if (!response.next) {
        characterData.push(response.results);
      }
    }
    // console.log(characterData);
    return characterData;
  }

  async function assignTableData() {
    let swapiMap = await getCharacterData();
    console.log(swapiMap);
  }

  assignTableData();

  //   let swapiChData = swapiMap.map((personData) => {
  //     return {
  //       name: personData.name,
  //       birth: personData.birth_year,
  //       height: personData.height,
  //       mass: personData.mass,
  //       homeWorld: personData.homeworld,
  //       species: personData.species,
  //     };
  //   });
  //   setTableData(swapiChData);
  // }

  // const tableCellData = tableData.map((personData) => {
  //   return (
  //     <Table
  //       name={personData.name}
  //       birth={personData.birth}
  //       height={personData.height}
  //       mass={personData.mass}
  //       homeWorld={personData.homeWorld}
  //       species={personData.species}
  //     />
  //   );
  // });

  // let data = {
  //   name: response,
  //   birthDate: characterBirthDate,
  //   height: characterHeight,
  //   mass: characterMass,
  //   homeWorld: characterHomeWorld,
  //   species: characterSpecies,
  // };

  // }

  // useEffect(() => {
  //   assignTableData();
  // }, []);

  return (
    <div>
      <Header />
      <table className="table table-bordered mt-4">
        <thead className="table table-hover table-sm">
          <tr>
            <td>Name</td>
            <td>Birth Date</td>
            <td>Height</td>
            <td>Mass</td>
            <td>Home World</td>
            <td>Species</td>
          </tr>
        </thead>
        {/* {tableCellData} */}
      </table>
    </div>
  );
}

// async function assignTableData() {
// let swapiMap = await getCharacterData(); //type is object
// console.log(swapiMap)
// let arrData = Object.entries(swapiMap); //returning an empty array => Why it returns an empty array
// let response = swapiMap.map((eachPerson) => eachPerson.name); //map only works on Arrays
// console.log(response);
// let characterBirthDate = swapiMap.map(
//   (eachPerson) => eachPerson.birth_year
// ); //map only works on Arrays
// let characterHeight = swapiMap.map((eachPerson) => eachPerson.height); //map only works on Arrays
// let characterMass = swapiMap.map((eachPerson) => eachPerson.mass); //map only works on Arrays
// let characterHomeWorld = swapiMap.map((eachPerson) => eachPerson.homeworld); //map only works on Arrays
// let characterSpecies = swapiMap.map((eachPerson) => eachPerson.species); //map only works on Arrays
// console.log(eachTableData);
// console.table(response);
// console.table(characterBirthDate);
// console.table(characterHeight);
// console.table(characterMass);
// console.table(characterHomeWorld);
// console.table(characterSpecies);

// function updateTableData() {
//   assignTableData();
//   // console.log(cellData)
// }

// updateTableData()

// const api = axios.create({
//   baseURL: "https://swapi.dev/api/",
// });
// console.log("api", api);

// async function getCharacterData() {
//   const response = await axios.get("https://swapi.dev/api/");
//   console.log(response.data.people);

//   const responseJSON = await response.json();
//   // console.log(responseJSON);
//   const peopleURL = await responseJSON.data;
//   console.log(peopleURL);
//   return peopleURL;
// }

// getCharacterData()
//   .then((response) => console.log(response))
//   .catch((err) => console.log("Error is: ", err));

// let swapiURL = "https://swapi.dev/api/";
// // console.log(swapiURL);

// fetch(swapiURL)
//   .then((response) => response.json())
//   .then(data => data.people)
//   .then(peopleData => fetch(peopleData))
//   .then(peopleDataJSON => peopleDataJSON.json())
//   .then(nameValue => nameValue.results[0].films[1])
//   .then(filmURL => fetch(filmURL))
//   .then(filmJSON => filmJSON.json())
//   .then(filmTitle => console.log(filmTitle.title))
