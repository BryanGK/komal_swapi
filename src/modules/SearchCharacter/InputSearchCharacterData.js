import React from "react";

export default function InputSearchCharacterData({
  name,
  value,
  handleChange,
  displayFilteredData,
  // keyPress,
  // displaySearchedCharacter,
}) {
  // console.log("hello");
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
        onKeyDown={displayFilteredData}
      />
    </>
  );
}
