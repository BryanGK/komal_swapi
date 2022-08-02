import { useEffect } from "react";
import { useState } from "react";

export default function useSearchCharacterData(tableData) {
  // console.log(tableData);
  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState(tableData);
  // console.log(filterData);

  useEffect(() => {
    setFilterData(tableData);
  }, [tableData]);

  function handleChange(event) {
    event.preventDefault();
    setValue(event.target.value);
  }

  function displayFilterData() {
    for (let i = 0; i < filterData.length; i++) {
      if (value.toLowerCase() === filterData[i].name.toLowerCase()) {
        let array = [];
        console.log(array);
        array.push(filterData[i]);
        setFilterData(array);
        // setFilterData(filterData[i]);
      }
      //THIS DOES NOT DO ANYTHING
      // if (value.toLowerCase() !== filterData[i].name.toLowerCase()) {
      //   // if (!value) {
      //   console.log(filterData);
      //   setFilterData(tableData);
      //   console.log(filterData);
    }
  }

  function displayTableData(tableData) {
    // for (let i = 0; i < tableData.length; i++) {
    //   if (!value || value.toLowerCase() != tableData[i].name.toLowerCase()) {
    if (!value) {
      setFilterData(tableData);
      console.log(filterData);
      console.log(tableData);
    }
    //   }
    // }
  }

  // if (filterData.length === 1) {
  //   setFilterData(filterData.filter((data) => value == data.name));
  //   console.log("object");
  // }
  // }

  return {
    value,
    filterData,
    handleChange,
    displayFilterData,
    displayTableData,
  };
}

//THIS DOES NOT WORK???
// if (value == tableData.map((data) => data.name)) {
//   console.log(true);
// }

//why undefined
// // useEffect(() => {
// buttonClick();
// // }, []);
// function buttonClick() {
//   const data = tableData;
//   console.log(data);
// }

// export default function useSearchCharacterData(
//   tableData,
//   // setTableData,
//   getHomeData,
//   getSpecieData
// ) {
//   const [searchCharacterData, setSearchCharacterData] = useState("");
//   // console.log(searchCharacterData);
//   const [filterData, setFilterData] = useState(tableData);
//   console.log(filterData);

//   useEffect(() => {
//     copyTableDataStateIntoFilterData();
//   }, []);

//   function handleChange(event) {
//     event.preventDefault();
//     setSearchCharacterData(event.target.value);
//   }

//   function copyTableDataStateIntoFilterData() {
//     setFilterData(tableData);
//   }

//   async function getFilteredData() {
//     if (searchCharacterData) {
//       const searchRequest = await axios.get(
//         `https://swapi.dev/api/people/?search=${searchCharacterData}`
//       );
//       const searchData = await searchRequest.data.result;

//       const homeData = await getHomeData(searchData);
//       const specieData = await getSpecieData(searchData);
//       searchData[0].homeworld = homeData.toString();
//       searchData[0].species =
//         specieData[0] === undefined ? "Human" : specieData.toString();
//       console.log(searchData);
//       return searchData;
//     }
//   }
// }

// function displayFilterData() {
//   const fetchSearchCharacter = fetch(
//     `https://swapi.dev/api/people/?search=${value}`
//   );
//   const res = fetchSearchCharacter.then((data) => data);
//   // const searchCharacterData = await fetchSearchCharacter
//   console.log(res);
// }
