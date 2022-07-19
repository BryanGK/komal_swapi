import React from "react";
import axios from "axios";
// import { nanoid } from "nanoid";
import Header from "./modules/Header";
import { useState } from "react";
// import { useEffect } from "react";
// import Table from "./modules/Table/Table";

export default function App() {
  const [tableData, setTableData] = useState();
  console.log("tableData", tableData);

  async function getCharacterData() {
    let swapiApi = await axios.get("https://swapi.dev/api/people");
    let response = await swapiApi.data;
    let characterData = [];
    while (response.next) {
      characterData.push(response.results);
      swapiApi = await axios.get(response.next);
      response = await swapiApi.data;
      if (!response.next) {
        characterData.push(response.results);
      }
    }
    const data = characterData.flat();
    console.log(data);
    return data;
  }

  async function getHomeAndSpecieName() {
    const getSwapiData = await getCharacterData();

    //homeName
    for (let char of getSwapiData) {
      const characterHomeData = await axios.get(char.homeworld);
      const characterHomeName = await characterHomeData.data.name;
      console.log(characterHomeName, "HomeName");
    }

    //Specie Name
    for (let char of getSwapiData) {
      const characterSpeciesData = await axios.get(char.species);
      const characterSpecieName = await characterSpeciesData.data.name;
      console.log(characterSpecieName, "SPECIEnAME");
    }
  }

  getHomeName();

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

// const flatData = getSwapiData.flat();
// console.log(flatData);
//THIS WAY HOMEWORLD'S URL IS UNDEFINED
//WHY => MY THINKING IS THAT IT COULD BE BECAUSE the returned data is Array of ARray of OBJECT
// const getHomeData = getSwapiData.map(async (chData) => {
//   const homeData = await axios.get(chData.homeworld);
//   console.log(homeData);
// });

//RETURN THE ARRAY of PROMISES => EXPECTING AN ARRAY of STRING VALUES
//THINK of ANOTHER WAY of WRITING THIS FUNCTION
// async function assignTableData() {
//   const swapidata = await getCharacterData(); //Array
//   const mapSwapiData = swapidata.map((chData) => {
//     return chData.map(async (data) => {
//       const fetchHomeData = await axios.get(data.homeworld);
//       const species = await axios.get(data.species);
//       const response = await fetchHomeData.data.name;
//       const speciesResponse = await species.data.name;
//       return {
//         chName: data.name,
//         chBirthDate: data.birth_year,
//         chHeight: data.height,
//         chMass: data.mass,
//         chHome: response,
//         chSpecies: speciesResponse,
//       };
//     });
//   });
//   setTableData(mapSwapiData);
//   // console.log(data);
// }

//DID NOT WORK
// const tableCellData = (tableData ?? []).map((data) => {
//   return (
//     <Table
//       key={nanoid()}
//       name={data.chName}
//       birth={data.chBirthDate}
//       height={data.ChHeight}
//       mass={data.chMass}
//       homeWorld={data.chHome}
//       species={data.chSpecies}
//     />
//   );
// });

// console.log(tableCellData);

// let fetchHomeWorldData;
// let response;
// loop through each character to get homeworld name
//1. One way to loop through an array
// for (let i = 0; i < swapidata.length; i++) {
//   for (let j = 0; j < swapidata[i].length; j++) {
//     fetchHomeWorldData = await axios.get(swapidata[i][j].homeworld);
//     response.push(await fetchHomeWorldData.data.name);
//   }
// }

//2. Using map to loop through an array of array
// let response = swapidata.map((eachData) => {
//   eachData.map(async (homeName) => {
//     let fetchDataFromHomeUrl = await axios.get(homeName.homeworld);
//     let response = await fetchDataFromHomeUrl.data.name;
//     console.log(response);
//   });
// });

// const mapData = swapidata.map((eachData) => {
//   return {
//     chName: eachData.name,
//     birth: eachData.birth_year,
//     chHeight: eachData.height,
//     chMass: eachData.mass,
//     home: eachData.homeworld,
//     species: eachData.species
//   }
// })
// setTableData(mapData)
// console.log("EACHdATA: ", eachData);
// let flatData = eachData.flat();
// console.log(flatData);
// return eachData.map((chData) => {
//   return {
//     name: chData.name,
//     birth: chData.birth_year,
//     height: chData.height,
//     mass: chData.mass,
// home: eachData.map(async (homeName) => {
//   let fetchDataFromHomeUrl = await axios.get(homeName.homeworld);
//   return await fetchDataFromHomeUrl.data.name;
//   // console.log(response);
// }),
//     home: (async(chData.homeworld) => {}),
//     species: chData.species,
//   };
// });
// console.log(eachData);
// });
// setTableData(mapData.flat());
// const homeName = response.map((name) => name);
// console.log(mapData);

// return mapData;
// }

// let tableCellData;
// async function displayData() {
//   let homeName = await assignTableData();
//   console.log(homeName);

// const tableCellData = tableData.map((personData) => {
//   console.log(personData);
//   personData.map((eachData) => console.log(eachData));
//   // let homeName = await axios.get(personData.homeworld)
//   // let response = await homeName.data.name
// return (
//   <Table
//     key={nanoid()}
//     chName={personData.name}
//     birth={personData.birth}
//     height={personData.height}
//     mass={personData.mass}
//     homeWorld={personData.homeworld}
//     species={personData.species}
//   />
// );
// });
// }
// displayData();
