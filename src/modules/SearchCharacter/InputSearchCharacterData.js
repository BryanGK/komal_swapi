import React from "react";

export default function InputSearchCharacterData({
  name,
  value,
  handleChange,
  displayFilterData,
}) {
  return (
    <>
      <input
        type="text"
        className="m-3"
        placeholder="Search Character by name..."
        name={name}
        value={value}
        onChange={handleChange}
      />
      <button onClick={displayFilterData}>Search</button>
    </>
  );
}
