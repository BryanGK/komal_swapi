import { nanoid } from "nanoid";
import React from "react";

export default function Table({ tableData }) {
  return (
    <table className="table table-bordered mt-4">
      <thead className="table table-hover table-sm">
        <tr>
          <td>Name</td>
          <td>Birth Date</td>
          <td>Height</td>
          <td>Mass</td>
          <td>Home World</td>
          <td>Species</td>
        </tr>
      </thead>
      <tbody>
        {tableData.map((characterData) => {
          return (
            <tr key={nanoid()}>
              <td>{characterData.name}</td>
              <td>{characterData.birth_year}</td>
              <td>{characterData.height}</td>
              <td>{characterData.mass}</td>
              <td>{characterData.homeworld}</td>
              <td>{characterData.species}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
