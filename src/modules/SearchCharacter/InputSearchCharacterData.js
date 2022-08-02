import React from "react";
import useSearchCharacterData from "./useSearchCharacterData";

export default function InputSearchCharacterData({
  name,
  value,
  handleChange,
  displayFilterData,
  // getFilteredData,
  displayTableData,
}) {
  // console.log("hello");
  // const chData = value ? getFilteredData : tableData;
  return (
    <>
      <input
        type="text"
        className="m-3"
        placeholder="Search Character by name..."
        name={name}
        value={value}
        onChange={handleChange}
        // onKeyDown={displayTableData}
      />
      <button onClick={displayFilterData}>Search</button>
    </>
  );
}
