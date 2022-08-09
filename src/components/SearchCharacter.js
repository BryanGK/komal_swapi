import React, { useEffect, useState } from "react";
import axios from "axios";

export function useSearchCharacterData(tableData, setLoading) {
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
export function SearchCharacter({ name, inputValue, handleChange }) {
  return (
    <nav className="navbar mb-3">
      <div className="d-flex flex-row container-fluid justify-content-center">
        <form className="d-flex" role="search">
          <div className="col-xs-5">
            <input
              type="search"
              className="form-control me-5"
              placeholder="Search Character by name..."
              name={name}
              value={inputValue}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
