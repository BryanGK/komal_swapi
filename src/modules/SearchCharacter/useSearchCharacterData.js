import { useState } from "react";
import { useEffect } from "react";

export default function useSearchCharacterData(tableData) {
  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState(tableData);

  useEffect(() => {
    setFilterData(tableData);
  }, [tableData]);

  function handleChange(event) {
    event.preventDefault();
    setValue(event.target.value);
    displayTableData(tableData, event);
  }

  function displayFilterData(event) {
    event.preventDefault();
    for (let i = 0; i < filterData.length; i++) {
      if (value.toLowerCase() === filterData[i].name.toLowerCase()) {
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
    value,
    filterData,
    handleChange,
    displayFilterData,
    displayTableData,
  };
}
