import React from "react";
import Header from "./modules/Header";
import useFetchCharacterData from "./modules/Table/useFetchCharacterData";
import usePagination from "./modules/Pagination/usePagination";

import Table from "./modules/Table";
import DisplayPaginationNumber from "./modules/Pagination/DisplayPaginationNumber";
import InputSearchCharacterData from "./modules/SearchCharacter/InputSearchCharacterData";
import useSearchCharacterData from "./modules/SearchCharacter/useSearchCharacterData";

export default function App() {
  const { tableData } = useFetchCharacterData();
  const { counter, pagination, numberOfButtons, setCounter, onButtonChange } =
    usePagination(tableData);
  const {
    value,
    handleChange,
    filterData,
    displayFilterData,
    displayTableData,
  } = useSearchCharacterData(tableData);

  return (
    <div>
      <Header />
      <InputSearchCharacterData
        name="inputSearchBar"
        value={value}
        handleChange={handleChange}
        displayFilterData={displayFilterData}
        displayTableData={displayTableData}
      />
      <Table
        tableData={tableData}
        start={pagination.start}
        end={pagination.end}
        filterData={filterData}
      />
      <DisplayPaginationNumber
        counter={counter}
        numberOfButtons={numberOfButtons}
        setCounter={setCounter}
        onButtonChange={onButtonChange}
      />
    </div>
  );
}
