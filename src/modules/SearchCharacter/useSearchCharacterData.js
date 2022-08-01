// import axios from "axios";
// import { useEffect, useState } from "react";

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
