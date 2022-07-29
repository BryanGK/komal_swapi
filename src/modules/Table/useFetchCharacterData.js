import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCharacterData() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const characterData = await getCharacterData();
    const homeData = await getHomeName(characterData);
    const specieData = await getSpecieName(characterData);

    for (let i = 0; i < characterData.length; i++) {
      characterData[i].homeworld = homeData[i];
      characterData[i].species =
        characterData[i].species.length === 0 ? "Human" : specieData[i];
    }

    setTableData(characterData);
    return characterData;
  }

  async function getCharacterData() {
    let fetchCharacterData = await axios.get("https://swapi.dev/api/people/");
    let characterResponse = await fetchCharacterData.data;
    let characterDataArray = [];
    while (characterResponse.next) {
      characterDataArray = [
        ...characterDataArray,
        ...characterResponse.results,
      ];
      fetchCharacterData = await axios.get(characterResponse.next);
      characterResponse = await fetchCharacterData.data;
      if (!characterResponse.next) {
        characterDataArray = [
          ...characterDataArray,
          ...characterResponse.results,
        ];
      }
    }
    return characterDataArray;
  }

  async function getHomeName(characterData) {
    let homeNameArray = [];
    for (let chHomeName of characterData) {
      const getHomeWorldUrl = await axios.get(chHomeName.homeworld);
      const homeName = await getHomeWorldUrl.data.name;
      homeNameArray.push(homeName);
    }
    return homeNameArray;
  }

  async function getSpecieName(characterData) {
    let specieNameArray = [];
    for (let chSpecieName of characterData) {
      const getSepcieUrl = await axios.get(chSpecieName.species);
      const specieName = await getSepcieUrl.data.name;
      specieNameArray.push(specieName);
    }
    return specieNameArray;
  }
  return { tableData, getHomeName, getSpecieName };
}

// const data = replaceHomeAndSpecieUrlWithTheirNameAndReturnCharacterData(
//   characterData,
//   homeData,
//   specieData
// );
// console.log(data);

// async function replaceHomeAndSpecieUrlWithTheirNameAndReturnCharacterData(
//   characterData,
//   homeData,
//   specieData
// ) {
//   for (let i = 0; i < characterData.length; i++) {
//     characterData[i].homeworld = homeData[i];
//     characterData[i].species =
//       characterData[i].species.length === 0 ? "Human" : specieData[i];
//   }
//   return characterData;
// }
