import React from "react";
import Header from "./modules/Header";
import useFetchCharacterData from "./modules/Table/useFetchCharacterData";
import usePagination from "./modules/Pagination/usePagination";

import Table from "./modules/Table";
import DisplayPaginationNumber from "./modules/Pagination/DisplayPaginationNumber";
import InputSearchCharacterData from "./modules/SearchCharacter/InputSearchCharacterData";
import useSearchCharacterData from "./modules/SearchCharacter/useSearchCharacterData";
import LoadingSpinner from "./modules/LoadingSpinner";

export default function App() {
  const { tableData, loading } = useFetchCharacterData();
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
      {/* {loading && <Circles color="#00BFFF" height={80} width={80} />} */}
      <LoadingSpinner loading={loading} />

      <DisplayPaginationNumber
        counter={counter}
        numberOfButtons={numberOfButtons}
        setCounter={setCounter}
        onButtonChange={onButtonChange}
      />
    </div>
  );
}
