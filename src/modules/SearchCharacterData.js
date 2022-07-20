import React from "react";

export default function SearchCharacterData({
  name,
  value,
  handleChange,
  // displaySearchedCharacter,
}) {
  // console.log(handleChange);
  return (
    <>
      <input
        id="searchCharacter"
        name={name}
        type="text"
        value={value}
        placeholder="Search Character by name..."
        className="m-3"
        onChange={handleChange}
      />
    </>
  );
}
