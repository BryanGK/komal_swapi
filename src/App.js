import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./modules/Header";
import Table from "./modules/Table/Table";
// import SwapiApi from "./SwapiApi";
// import SwapiApi from "./SwapiApi";

export default function App() {
  const [tableData, setTableData] = useState([
    {
      name: "",
      birthDate: "",
      height: "",
      mass: "",
      homeWorld: "",
      species: "",
    },
  ]);
  // console.log(tableData);

  async function swapiData() {
    const swapiApi = await axios.get("https://swapi.dev/api/"); //return an object, which is why there is no need to convert the given data into JSON object
    // const response = await swapiApi.json();
    const response = await swapiApi.data.people; //output: https://swapi.dev/api/people/
    // console.log(response);
    const fetchData = await axios.get(response); //fetching data in form of an object from people's Url
    // console.log("fetchData: ", fetchData)
    const characterName = await fetchData.data.results; //pulling up the array of object data of people
    // console.table("Name: ", characterName);
    return characterName;
  }

  function assignTableData() {
    let swapiMap = swapiData(); //type is object
    let arrData = Object.entries(swapiMap); //returning an empty array => Why it returns an empty array
    let eachTableData = arrData.map((eachPerson) => eachPerson.name); //map only works on Arrays
    console.log(eachTableData); //Why it's an empty array?
  }
  useEffect(() => {
    assignTableData();

    // for (let i = 0; i < 10; i++) {
    //   setTableData(() => {
    //     swapiData(i);
    //   });
    // }

    // let swapiMap = swapiData()
    // console.log(Object.keys(swapiMap))
    // swapiMap.map((eachArray => console.log(eachArray)))
    // setTableData(swapiMap.map(eachArray => console.log(eachArray)))

    // axios
    //   .get("https://swapi.dev/api/")
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Table />
    </div>
  );
}















// const api = axios.create({
//   baseURL: "https://swapi.dev/api/",
// });
// console.log("api", api);

// async function swapiData() {
//   const response = await axios.get("https://swapi.dev/api/");
//   console.log(response.data.people);

//   const responseJSON = await response.json();
//   // console.log(responseJSON);
//   const peopleURL = await responseJSON.data;
//   console.log(peopleURL);
//   return peopleURL;
// }

// swapiData()
//   .then((response) => console.log(response))
//   .catch((err) => console.log("Error is: ", err));

// let swapiURL = "https://swapi.dev/api/";
// // console.log(swapiURL);

// fetch(swapiURL)
//   .then((response) => response.json())
//   .then(data => data.people)
//   .then(peopleData => fetch(peopleData))
//   .then(peopleDataJSON => peopleDataJSON.json())
//   .then(nameValue => nameValue.results[0].films[1])
//   .then(filmURL => fetch(filmURL))
//   .then(filmJSON => filmJSON.json())
//   .then(filmTitle => console.log(filmTitle.title))
