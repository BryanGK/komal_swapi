import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import {
  Header,
  LoadingSpinner,
  SearchCharacter,
  useSearchCharacterData,
  Table,
  Pagination,
} from './components';

export default function App() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [chData, setChData] = useState();
  const { inputValue, filterData, handleChange } = useSearchCharacterData(
    tableData,
    setLoading
  );

  useEffect(() => {
    getCharacterData(`https://swapi.dev/api/people`);
  }, []);

  async function getCharacterData(url) {
    const chData = await characterData(url);
    const homeData = await characterHomeName(chData);
    const specieData = await characterSpecieName(chData);
    for (let i = 0; i < chData.length; i++) {
      chData[i].homeworld = homeData[i];
      chData[i].species = specieData[i];
    }
    setTableData(chData);
    setLoading(false);
  }

  async function characterData(url) {
    let characterArray = [];
    const data = await fetchData(url);

    setNextPage(data.data.next);
    setPrevPage(data.data.previous);
    characterArray = [...characterArray, ...data.data.results];
    return characterArray;
  }

  async function characterHomeName(chData) {
    const planetData = await Promise.all(
      chData.map(async (data) => {
        const homeData = await axios.get(data.homeworld);
        const homeName = await homeData.data.name;
        return homeName;
      })
    );
    return planetData;
  }

  async function characterSpecieName(chData) {
    const data = await Promise.all(
      chData.map(async (data) => {
        const specieData = await axios.get(data.species);
        const specieName = await specieData.data.name;
        const name = specieName ? specieName.toString() : "Human";
        return name;
      })
    );
    return data;
  }

  async function fetchData(url) {
    const fetchReq = await axios.get(url);
    return fetchReq;
  }

  if (loading && tableData.length === 0) {
    return (
      <>
        <Header />
        <LoadingSpinner loading={loading} />
      </>
    );
  }
  if (!loading) {
    return (
      <>
        <Header />
        <LoadingSpinner loading={loading} />
        <SearchCharacter
          name="inputSearchBar"
          inputValue={inputValue}
          setLoading={setLoading}
          handleChange={handleChange}
        />
        <Table
          inputValue={inputValue}
          tableData={tableData}
          filterData={filterData}
        />
        <Pagination
          inputValue={inputValue}
          getCharacterData={getCharacterData}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </>
    );
  }
}
