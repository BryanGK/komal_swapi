import React from "react";
import Header from "./modules/Header";
import useFetchCharacterData from "./modules/Table/useFetchCharacterData";
import usePagination from "./modules/Pagination/usePagination";

import Table from "./modules/Table";
import DisplayPaginationNumber from "./modules/Pagination/DisplayPaginationNumber";
import InputSearchCharacterData from "./modules/SearchCharacter/InputSearchCharacterData";
import useSearchCharacterData from "./modules/SearchCharacter/useSearchCharacterData";
import LoadingSpinner from "./modules/LoadingSpinner";
import "./style.css";

export default function App() {
  const { tableData, loading } = useFetchCharacterData();
  const {
    value,
    handleChange,
    filterData,
    displayFilterData,
    displayTableData,
  } = useSearchCharacterData(tableData);
  const { counter, pagination, onButtonChange } = usePagination(
    tableData,
    filterData
  );

  return (
    <div>
      <Header />
      <LoadingSpinner loading={loading} />
      {!loading && (
        <InputSearchCharacterData
          name="inputSearchBar"
          value={value}
          handleChange={handleChange}
          displayFilterData={displayFilterData}
          displayTableData={displayTableData}
        />
      )}

      {!loading && (
        <Table
          tableData={tableData}
          start={pagination.start}
          end={pagination.end}
          filterData={filterData}
        />
      )}

      {!loading && (
        <DisplayPaginationNumber
          counter={counter}
          onButtonChange={onButtonChange}
        />
      )}
    </div>
  );
}
