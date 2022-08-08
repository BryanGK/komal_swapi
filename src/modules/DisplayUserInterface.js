import React from "react";
import { useState } from "react";
import "../style.css";

import useFetchCharacterData from "../modules/Table/useFetchCharacterData";
import useSearchCharacterData from "../modules/SearchCharacter/useSearchCharacterData";
import usePagination from "../modules/Pagination/usePagination";

import Header from "../modules/Header";
import LoadingSpinner from "../modules/LoadingSpinner";
import SearchCharacter from "../modules/SearchCharacter/SearchCharacter";
import Table from "../modules/Table";
import Pagination from "../modules/Pagination/Pagination";

export default function DisplayUserInterface() {
  const [loading, setLoading] = useState(true);
  console.log(loading);
  const { tableData } = useFetchCharacterData(setLoading);
  const { inputValue, filterData, handleChange } = useSearchCharacterData(
    tableData,
    setLoading
  );
  const { counter, pagination, onButtonChange } = usePagination(
    filterData,
    inputValue
  );

  if (loading && tableData.length === 0) {
    return (
      <>
        <Header />
        <LoadingSpinner loading={loading} />
      </>
    );
  }
  if (!loading) {
    return (
      <>
        <Header />
        <LoadingSpinner loading={loading} />
        <SearchCharacter
          name="inputSearchBar"
          inputValue={inputValue}
          setLoading={setLoading}
          handleChange={handleChange}
        />
        <Table
          start={pagination.start}
          end={pagination.end}
          inputValue={inputValue}
          tableData={tableData}
          filterData={filterData}
        />
        <Pagination
          counter={counter}
          inputValue={inputValue}
          onButtonChange={onButtonChange}
        />
      </>
    );
  }
}
