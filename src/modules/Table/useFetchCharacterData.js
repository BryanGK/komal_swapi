import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCharacterData() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getCharacterData();
  }, []);

  const [loading, setLoading] = useState(true);

  async function getCharacterData() {
    const starWarsData = await chData();
    const homeData = await chHomeName(starWarsData);
    const specieData = await chSpecieName(starWarsData);
    for (let i = 0; i < starWarsData.length; i++) {
      starWarsData[i].homeworld = homeData[i];
      starWarsData[i].species = specieData[i];
    }
    setTableData(starWarsData);
    setLoading(false);
  }

  async function chData() {
    let chArray = [];
    const data = await Promise.all([
      getData(1),
      getData(2),
      getData(3),
      getData(4),
      getData(5),
      getData(6),
      getData(7),
      getData(8),
      getData(9),
    ]);

    for (let i = 0; i < 9; i++) {
      const pageData = data[i].data.results;
      chArray = [...chArray, ...pageData];
    }
    return chArray;
  }

  async function chHomeName(starWarsData) {
    const data = await Promise.all(
      starWarsData.map(async (data) => {
        const homeData = await axios.get(data.homeworld);
        const homeName = await homeData.data.name;
        return homeName;
      })
    );
    return data;
  }

  async function chSpecieName(starWarsData) {
    const data = await Promise.all(
      starWarsData.map(async (data) => {
        const specieData = await axios.get(data.species);
        const specieName = await specieData.data.name;
        const name = specieName ? specieName.toString() : "Human";
        return name;
      })
    );
    return data;
  }
  async function getData(pageNum) {
    const fetchReq = await axios.get(
      `https://swapi.dev/api/people/?page=${pageNum}`
    );
    return fetchReq;
  }
  return { tableData, loading };
}
