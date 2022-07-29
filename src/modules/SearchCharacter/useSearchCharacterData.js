import axios from "axios";
import { useEffect, useState } from "react";

export default function useSearchCharacterData(
  tableData,
  getHomeName,
  getSpecieName
) {
  const [searchCharacterData, setSearchCharacterData] = useState("");
  // console.log(searchCharacterData);
  const [filterData, setFilterData] = useState(tableData);
  // console.log(filterData);

  useEffect(() => {
    copyTableDataStateIntoFilterData();
  }, [tableData]);

  function handleChange(event) {
    event.preventDefault();
    setSearchCharacterData(event.target.value);
  }

  function copyTableDataStateIntoFilterData() {
    setFilterData(tableData);
  }

  async function displayFilteredData() {
    if (searchCharacterData) {
      const searchRequest = await axios.get(
        `https://swapi.dev/api/people/?search=${searchCharacterData}`
      );
      const searchResult = await searchRequest.data.results;
      // if (searchCharacterData == searchResult.name) {
      console.log(searchResult);
      const homeName = await getHomeName(searchResult);
      const specieName = await getSpecieName(searchResult);
      // searchResult.homeworld = homeName.toString();
      // searchResult.species = specieName.toString();
      console.log(searchResult[0].name);
    }
    // }
    // if (!searchCharacterData) {
    //   console.log(filterData);
    // }
    // console.log(await axios.get());
  }

  return { searchCharacterData, handleChange, displayFilteredData };
}

// setFilterData(
//   filterData.filter((chData) => console.log(searchCharacterData))
// );

// console.log(getHomeName(searchResult));
// console.log(getSpecieName(searchResult));
