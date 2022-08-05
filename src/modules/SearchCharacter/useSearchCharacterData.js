import { useState, useEffect } from "react";

export default function useSearchCharacterData(tableData) {
  const [inputValue, setInputValue] = useState("");
  const [filterData, setFilterData] = useState(tableData);

  useEffect(() => {
    setFilterData(tableData);
  }, [tableData]);

  function handleChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
    displayTableData(tableData, event);
  }

  function displayFilterData(event) {
    event.preventDefault();
    for (let i = 0; i < filterData.length; i++) {
      if (inputValue.toLowerCase() === filterData[i].name.toLowerCase()) {
        let array = [];
        array.push(filterData[i]);
        setFilterData(array);
      }
    }
  }

  function displayTableData(tableData, event) {
    for (let i = 0; i < tableData.length; i++) {
      if (event.target.value.toLowerCase() != tableData[i].name.toLowerCase()) {
        setFilterData(tableData);
      }
    }
  }

  return {
    inputValue,
    filterData,
    handleChange,
    displayFilterData,
  };
}
