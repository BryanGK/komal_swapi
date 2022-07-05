import React from "react";

export default function Table() {
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
    </table>
  );
}
