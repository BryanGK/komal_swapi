// import axios from "axios";
import React from "react";

export default function Table({
  id,
  name,
  birth,
  height,
  mass,
  homeWorld,
  species,
}) {
  // console.log(birth);

  return (
    // <table className="table table-bordered mt-4">
    //   <thead className="table table-hover table-sm">
    //     <tr>
    //       <td>Name</td>
    //       <td>Birth Date</td>
    //       <td>Height</td>
    //       <td>Mass</td>
    //       <td>Home World</td>
    //       <td>Species</td>
    //     </tr>
    //   </thead>
    <>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{birth}</td>
          <td>{height}</td>
          <td>{mass}</td>
          <td>{homeWorld}</td>
          <td>{species}</td>
        </tr>
      </tbody>
    </>
    // </table>
  );
}

//did not work => 1
// async function getHomeWorldName() {
//   const homeWorldName = await axios.get(homeWorld);
//   const response = await homeWorldName.data.name;
//   console.log(response);
//   return response;
// }
// // getHomeWorldName(homeWorld);

// async function homeName() {
//   let planetName = await getHomeWorldName();
//   return planetName;
// }
// let data = homeName();
