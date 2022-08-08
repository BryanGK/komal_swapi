import axios from "axios";
import { useState, useEffect } from "react";

export default function useSearchCharacterData(tableData, setLoading) {
  const [inputValue, setInputValue] = useState("");
  const [filterData, setFilterData] = useState(tableData);

  useEffect(() => {
    displayFilterData();
  }, [inputValue]);

  async function displayFilterData() {
    if (inputValue) {
      const fetchFilter = await axios.get(
        `https://swapi.dev/api/people/?search=${inputValue}`
      );
      const searchData = await fetchFilter.data.results;
      const characterData = await Promise.all(
        searchData.map(async (eachData) => {
          const homeData = await axios.get(eachData.homeworld);
          const specieData = await axios.get(eachData.species);
          const homeName = await homeData.data.name;
          const specieName = await specieData.data.name;
          const specie = specieName ? specieName.toString() : "Human";
          return { homeName, specie };
        })
      );
      for (let i = 0; i < searchData.length; i++) {
        searchData[i].homeworld = characterData[i].homeName;
        searchData[i].species = characterData[i].specie;
      }
      setFilterData(searchData);
    }
  }

  function handleChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  return {
    inputValue,
    filterData,
    handleChange,
  };
}
