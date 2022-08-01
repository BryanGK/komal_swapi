import React from "react";
// import axios from "axios";
import Header from "./modules/Header";
// import { useState } from "react";
import useFetchCharacterData from "./modules/Table/useFetchCharacterData";
// import useSearchCharacterData from "./modules/SearchCharacter/useSearchCharacterData";
// import InputSearchCharacterData from "./modules/SearchCharacter/InputSearchCharacterData";

import Table from "./modules/Table";
// import DisplayPaginationNumber from "./modules/Pagination/DisplayPaginationNumber";

export default function App() {
  const { tableData } = useFetchCharacterData();
  // const { filterData, searchCharacterData, handleChange, getFilteredData } =
  //   useSearchCharacterData(tableData, setTableData, getHomeName, getSpecieName);

  return (
    <div>
      <Header />
      {/* <InputSearchCharacterData
        name="searchCharacter" */}
      {/* // value={searchCharacterData}
        // handleChange={handleChange}
        // getFilteredData={getFilteredData}
        // tableData={tableData}
      /> */}
      <Table tableData={tableData} />
      {/* <DisplayPaginationNumber /> */}
    </div>
  );
}

//Issues needs to be fixed
//1. How to display the entire table, if the search bar is empty
//2. Why both of the states are running, when user starts typing in the Search Bar
//3. How to arrange the written code, so that the request can be made parallel
//4. How to add pagination to the app, so that each page shows one fetch request

// const [searchCharacterData, setSearchCharacterData] = useState("");

// function handleChange(event) {
//   event.preventDefault();

//   setSearchCharacterData(event.target.value);
// }

// function searchData() {
//   const inputText = document.getElementById("searchCharacter").value;
//   setTableData(tableData.filter((data) => inputText == data.name));
// }

// function displaySearchedCharacter(e) {
//   e.preventDefault();
//   const inputText = document.getElementById("searchCharacter").value;
//   //logic for filtering out the table
//1. If the inputText is not equal to the character.name
//disply the entire table data
// setFilterData(
//   tableData.filter((data) => {
//     if (inputText != data.name) {
//       console.log("inside if");
//       return setTableData(tableData); //expecting to get the entire data shown in the table(82 characters)
//     }
//   })
// );

// setTableData(
//   tableData.find((data) => {
//     if (data.name === inputText) {
//       return data.name;
//     }
//   })
// );

// setFilterData(filterData.filter((data) => inputText == data.name));
// setTableData(tableData.filter((data) => inputText !== data.name));
// setSearchCharacterData("");
// if (inputText === "") {
//   setTableData(tableData);
// }
// console.log(inputText);
//   console.log("button clicked!")

//Write a function to get only characterData
//   async function getCharacterData() {
//     let fetchCharacterData = await axios.get("https://swapi.dev/api/people/");
//     let characterResponse = await fetchCharacterData.data;
//     let characterDataArray = [];
//     while (characterResponse.next) {
//       characterDataArray = [
//         ...characterDataArray,
//         ...characterResponse.results,
//       ];
//       fetchCharacterData = await axios.get(characterResponse.next);
//       characterResponse = await fetchCharacterData.data;
//       if (!characterResponse.next) {
//         characterDataArray = [
//           ...characterDataArray,
//           ...characterResponse.results,
//         ];
//       }
//       return characterDataArray;
//   }

// function displayData(){
//   const [chData] =  await Promise.all([getCharacterData()]);
//   console.log(chData)
//   }

//   displayData()

//not the right approach
// function getFirstPageData() {
//   const firstPageData = axios.get("https://swapi.dev/api/people/");
//   console.log(firstPageData);
//   return firstPageData;
// }

// async function getCharacterData() {
//   const dataFromFirstPage = await getFirstPageData();
//   // console.log(dataFromFirstPage.data.next);
//   let nextPageUrl = dataFromFirstPage.data.next;
//   console.log(nextPageUrl);
//   let allPagesUrl = [];
//   allPagesUrl.push("https://swapi.dev/api/people/");
//   while (nextPageUrl) {
//     allPagesUrl.push(nextPageUrl);
//     // allPagesUrl = [...allPagesUrl, ...nextPageUrl];
//     const fetchNextPageData = await axios.get(nextPageUrl);
//     nextPageUrl = await fetchNextPageData.data.next;
//     // console.log(nextPageUrl);
//     if (nextPageUrl === null) {
//       console.log(allPagesUrl);
//       return allPagesUrl;
//     }
//   }
// }

// console.log(Promise.all([getCharacterData()]).then((data) => data));

// async function getCharacterHomeWorldSpecieData() {
//   let fetchCharacterData = await axios.get("https://swapi.dev/api/people/");
//   let characterResponse = await fetchCharacterData.data;
//   let characterDataArray = []; //after running while loop, this will have all of the characterData result
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
//     // console.log(characterDataArray);
//   }

//   for (let char of characterDataArray) {
//     const getHomeWorldUrl = await axios.get(char.homeworld);
//     const homeName = await getHomeWorldUrl.data.name;
//     char.homeworld = homeName;
//   }

//   for (let char of characterDataArray) {
//     const getSepcieUrl = await axios.get(char.species);
//     const specieName = await getSepcieUrl.data.name;
//     char.species = specieName;
//   }

//   setTableData(characterDataArray);
// }

// const [filterData, setFilterData] = useState(tableData);

// let count = 0;
// useEffect(() => {
//   getCharacterHomeWorldSpecieData();
//   setFilterData(tableData);
// }, []); //will call this function only once

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

// async function getData() {
//   const characterData = await getCharacterData();
//   const homeData = await getHomeName(characterData);
//   const specieData = await getSpecieName(characterData);

//   // for (let i = 0; i < characterData.length; i++) {
//   //   characterData[i].homeworld = homeData[i];
//   //   characterData[i].species =
//   //     characterData[i].species.length === 0 ? "Human" : specieData[i];
//   // }
//   // console.log(characterData);

//   setTableData(
//     replaceHomeAndSpecieUrlWithTheirNameAndReturnCharacterData(
//       characterData,
//       homeData,
//       specieData
//     )
//   );
// }

// function replaceHomeAndSpecieUrlWithTheirNameAndReturnCharacterData(
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

// getData();

// async function searchData() {
//   let searchArray = [];
//   const searchResult = await axios.get(
//     `https://swapi.dev/api/people/?search=${searchCharacterData}`
//   );

//   const response = await searchResult.data.results;
//   searchArray = [...searchArray, ...response];

//   for (let homeUrl of searchArray) {
//     const homeName = await axios
//       .get(homeUrl.homeworld)
//       .then((homeName) => homeName.data.name);
//     homeUrl.homeworld = homeName;
//   }

//   for (let specie of searchArray) {
//     const specieName = await axios
//       .get(specie.species)
//       .then((response) => response.data.name);
//     specie.species = specieName;
//   }
//   if (searchArray.length === 1) {
//     console.log(searchArray);
//     // setFilterData(searchArray);
//     // setTableData(filterData);
//   }
//   // if (!searchCharacterData) {
//   //   // setTableData(tableData);
//   //   // console.log(tableData);
//   //   console.log("searchBar Empty");
//   // }
// }

{
  /* <form >
        <SearchCharacterData
          name="searchCharacter"
          value={searchCharacterData}
          handleChange={handleChange}
          keyPress={searchData} */
}
{
  /* // searchData={searchData}
          // clickEvent={displaySearchedCharacter(searchCharacterData)}
        /> */
}
{
  /* <button onClick={searchData}>Search...</button> */
}
{
  /* </form> */
}
