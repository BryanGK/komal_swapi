import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCharacterData() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getCharacterData();
  }, []);

  async function getCharacterData() {
    const starWarsData = await chData();
    const homeData = await chHomeName(starWarsData);
    const specieData = await chSpecieName(starWarsData);
    for (let i = 0; i < starWarsData.length; i++) {
      starWarsData[i].homeworld = homeData[i];
      starWarsData[i].species = specieData[i];
    }
    setTableData(starWarsData);
  }

  async function chData() {
    let chArray = [];
    const data = await Promise.all([
      getData(1),
      getData(2),
      getData(3),
      getData(4),
      getData(5),
      getData(6),
      getData(7),
      getData(8),
      getData(9),
    ]);

    for (let i = 0; i < 9; i++) {
      const pageData = data[i].data.results;
      chArray = [...chArray, ...pageData];
    }
    return chArray;
  }

  async function chHomeName(starWarsData) {
    const data = await Promise.all(
      starWarsData.map(async (data) => {
        const homeData = await axios.get(data.homeworld);
        const homeName = await homeData.data.name;
        // console.log(homeName);
        return homeName;
      })
    );
    return data;
  }

  async function chSpecieName(starWarsData) {
    const data = await Promise.all(
      starWarsData.map(async (data) => {
        const specieData = await axios.get(data.species);
        const specieName = await specieData.data.name;
        const name = specieName ? specieName.toString() : "Human";
        return name;
      })
    );
    return data;
  }
  async function getData(pageNum) {
    const fetchReq = await axios.get(
      `https://swapi.dev/api/people/?page=${pageNum}`
    );
    return fetchReq;
  }
  return { tableData };
}

// useEffect(() => {
//   changeTableDataState();
// }, []);
// async function getData() {
//   const characterData = await getCharacterData();
//   const homeData = await getHomeName(characterData);
//   const specieData = await getSpecieName(characterData);

//   for (let i = 0; i < characterData.length; i++) {
//     characterData[i].homeworld = homeData[i];
//     characterData[i].species =
//       characterData[i].species.length === 0 ? "Human" : specieData[i];
//   }

//   // setTableData(characterData);
//   return characterData;
// }

// async function changeTableDataState() {
//   const chData = await getData();
//   setTableData(chData);
// }

// async function getCharacterData() {
//   let fetchCharacterData = await axios.get("https://swapi.dev/api/people/");
//   let characterResponse = await fetchCharacterData.data;
//   let characterDataArray = [];
//   while (characterResponse.next) {
//     characterDataArray = [
//       ...characterDataArray,
//       ...characterResponse.results,
//     ];
//     fetchCharacterData = await axios.get(characterResponse.next);
//     characterResponse = await fetchCharacterData.data;
//     if (!characterResponse.next) {
//       characterDataArray = [
//         ...characterDataArray,
//         ...characterResponse.results,
//       ];
//     }
//   }
//   return characterDataArray;
// }

// async function getHomeName(characterData) {
//   let homeNameArray = [];
//   for (let chHomeName of characterData) {
//     const getHomeWorldUrl = await axios.get(chHomeName.homeworld);
//     const homeName = await getHomeWorldUrl.data.name;
//     homeNameArray.push(homeName);
//   }
//   return homeNameArray;
// }

// async function getSpecieName(characterData) {
//   let specieNameArray = [];
//   for (let chSpecieName of characterData) {
//     const getSepcieUrl = await axios.get(chSpecieName.species);
//     const specieName = await getSepcieUrl.data.name;
//     specieNameArray.push(specieName);
//   }
//   return specieNameArray;
// }
// return { tableData };
