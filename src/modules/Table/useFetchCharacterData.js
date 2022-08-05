import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchCharacterData(setLoading) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getCharacterData();
  }, []);

  async function getCharacterData() {
    const chData = await characterData();
    const homeData = await characterHomeName(chData);
    const specieData = await characterSpecieName(chData);
    for (let i = 0; i < chData.length; i++) {
      chData[i].homeworld = homeData[i];
      chData[i].species = specieData[i];
    }
    setTableData(chData);
    setLoading(false);
  }

  async function characterData() {
    let characterArray = [];
    const data = await Promise.all([
      fetchData(1),
      fetchData(2),
      fetchData(3),
      fetchData(4),
      fetchData(5),
      fetchData(6),
      fetchData(7),
      fetchData(8),
      fetchData(9),
    ]);

    for (let i = 0; i < 9; i++) {
      characterArray = [...characterArray, ...data[i].data.results];
    }
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

  async function fetchData(pageNum) {
    const fetchReq = await axios.get(
      `https://swapi.dev/api/people/?page=${pageNum}`
    );
    return fetchReq;
  }
  return { tableData };
}
