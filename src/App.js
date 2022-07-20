import React from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import Header from "./modules/Header";
import { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import Table from "./modules/Table/Table";

export default function App() {
  const [tableData, setTableData] = useState([]);
  // console.log("tableData", tableData);
  let count = 0;
  useEffect(() => {
    getCharacterHomeWorldSpecieData();
  }, [tableData]);
  // let tableCellData;
  // useEffect(() => {
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
  });
  // console.log(tableCellData);
  // }, [tableData]);

  async function getCharacterHomeWorldSpecieData() {
    let fetchCharacterData = await axios.get("https://swapi.dev/api/people");
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
    setTableData(characterDataArray);
  }

  // function searchCharacterByName(tableData) {
  //   if (document.getElementById("searchCharacter").value === tableData.name) {
  //     console.log("Passed");
  //   }
  // }

  return (
    <div>
      <Header />
      {/* <input
        id="searchCharacter"
        type="text"
        value=""
        placeholder="Search Character by name..."
        className="m-3"
        onChange={searchCharacterByName}
      /> */}
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
