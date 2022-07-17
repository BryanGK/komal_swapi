import React, { useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import Header from "./modules/Header";
import { useState } from "react";
import Table from "./modules/Table/Table";

export default function App() {
  const [tableData, setTableData] = useState([]);
  // console.log("tableData", tableData);

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
    let swapidata = await getCharacterData();
    let fetchHomeWorldData;
    let response;
    // loop through each character to get homeworld name
    for (let i = 0; i < swapidata.length; i++) {
      for (let j = 0; j < swapidata[i].length; j++) {
        fetchHomeWorldData = await axios.get(swapidata[i][j].homeworld);
        // console.log(fetchHomeWorldData);
        response = await fetchHomeWorldData.data.name;
        console.log("response: ", response);
      }
    }
    // console.log(fetchHomeWorldData);

    // const mapCharacterData = swapidata.map((eachCharacterData) => {
    //   return {
    //     chName: eachCharacterData.name,
    //     birthDate: eachCharacterData.birth,
    //     height: eachCharacterData.height,
    //     mass: eachCharacterData.mass,
    //     homeWorld: fetchHomeWorldData,
    //     species: eachCharacterData.species,
    //   };
    // });
    const mapData = swapidata.map((eachData) => console.log(eachData));
    setTableData(mapData.flat());
    return mapData;
  }

  useEffect(() => {
    assignTableData();
  }, []);

  const tableCellData = tableData.map((personData) => {
    return (
      <Table
        key={nanoid()}
        name={personData.name}
        birth={personData.birth}
        height={personData.height}
        mass={personData.mass}
        homeWorld={personData.homeworld}
        species={personData.species}
      />
    );
  });

  // console.table(tableCellData);

  //   let swapiChData = swapidata.map((personData) => {
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

  // let data = {
  //   name: response,
  //   birthDate: characterBirthDate,
  //   height: characterHeight,
  //   mass: characterMass,
  //   homeWorld: characterHomeWorld,
  //   species: characterSpecies,
  // };

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
        {tableCellData}
      </table>
    </div>
  );
}
