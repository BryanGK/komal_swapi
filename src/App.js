import React from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import Header from "./modules/Header";
import { useState } from "react";
import { useEffect } from "react";
import Table from "./modules/Table/Table";
import SearchCharacterData from "./modules/SearchCharacterData";

export default function App() {
  const [tableData, setTableData] = useState([]);
  // console.log(tableData, "tableData");

  const [searchCharacterData, setSearchCharacterData] = useState("");

  // const [filterData, setFilterData] = useState(tableData);
  // console.log(filterData, "filterData");
  console.log(searchCharacterData, "state");

  // useEffect(() => {
  //   console.log(tableData, "tableData");
  // }, [tableData]);
  let count = 0;
  useEffect(() => {
    getCharacterHomeWorldSpecieData();
  }, []); //will call this function only once

  const tableCellData = tableData.map((data) => {
    return (
      <Table
        key={nanoid()}
        id={count++}
        name={data.name}
        birth={data.birth_year}
        height={data.height}
        mass={data.mass}
        homeWorld={data.homeworld}
        species={data.species}
      />
    );
  }); //mapping the tableData state, in order to display the data in the table

  async function getCharacterHomeWorldSpecieData() {
    let fetchCharacterData = await axios.get("https://swapi.dev/api/people/");
    let characterResponse = await fetchCharacterData.data;
    let characterDataArray = []; //after running while loop, this will have all of the characterData result
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
      // console.log(characterDataArray);
    }

    for (let char of characterDataArray) {
      const getHomeWorldUrl = await axios.get(char.homeworld);
      const homeName = await getHomeWorldUrl.data.name;
      char.homeworld = homeName;
    }

    for (let char of characterDataArray) {
      const getSepcieUrl = await axios.get(char.species);
      const specieName = await getSepcieUrl.data.name;
      char.species = specieName;
    }

    // console.log(
    // "characterDataArray" + characterDataArray[randomHome] + randomHome//this does not work WHY???
    //   randomHome,
    //   characterDataArray[randomHome]
    // );
    // console.log(characterDataArray);
    setTableData(characterDataArray); //updating the tableData state with the people Data
    // setFilterData(characterDataArray);
  }

  function handleChange(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      event.preventDefault();
    }
    setSearchCharacterData(event.target.value);
  }

  async function searchData() {
    let searchArray = [];
    // console.log(searchCharacterData);
    const tempSearchValue = searchCharacterData;
    const searchResult = await axios.get(
      `https://swapi.dev/api/people/?search=${searchCharacterData}`
    );

    const response = await searchResult.data.results;
    // console.log(response);
    searchArray = [...searchArray, ...response];
    // console.log(searchArray);
    for (let homeUrl of searchArray) {
      const homeName = await axios
        .get(homeUrl.homeworld)
        .then((homeName) => homeName.data.name);
      homeUrl.homeworld = homeName;
    }
    // console.log(searchArray);

    for (let specie of searchArray) {
      const specieName = await axios
        .get(specie.species)
        .then((response) => response.data.name);
      specie.species = specieName;
    }
    if (searchArray.length === 1) {
      console.log(searchArray);
      setTableData(searchArray);
    }
    if (!searchCharacterData) {
      setTableData(tableData);
      console.log("searchBar Empty");
    }
  }
  return (
    <div>
      <Header />
      <form>
        <SearchCharacterData
          name="searchCharacter"
          value={searchCharacterData}
          handleChange={handleChange}
          keyPress={searchData}
          // searchData={searchData}
          // clickEvent={displaySearchedCharacter(searchCharacterData)}
        />
        {/* <button onClick={searchData}>Search...</button> */}
      </form>

      <table className="table table-bordered mt-4">
        <thead className="table table-hover table-sm">
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Birth Date</td>
            <td>Height</td>
            <td>Mass</td>
            <td>Home World</td>
            <td>Species</td>
          </tr>
        </thead>
        {tableCellData}
      </table>
    </div>
  );
}

//Issues needs to be fixed
//1. How to display the entire table, if the search bar is empty
//2. Why both of the states are running, when user starts typing in the Search Bar
//3. How to arrange the written code, so that the request can be made parallel
//4. How to add pagination to the app, so that each page shows one fetch request

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
//   console.log("button clicked!");
// }
