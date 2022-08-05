import { nanoid } from "nanoid";
import React from "react";

export default function Table({ tableData, start, end, filterData }) {
  const data = filterData.length === 1 ? filterData : tableData;

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered align-middle ">
        <thead className="table table-hover table-dark table-sm">
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
          {data.slice(start, end).map((characterData) => {
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
    </div>
  );
}
