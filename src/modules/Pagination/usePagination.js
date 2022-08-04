import { useState, useEffect } from "react";

export default function usePagination(tableData, filterData) {
  const [showPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const [counter, setCounter] = useState(1);
  const [numberOfButtons] = useState(Math.ceil(tableData.length / showPerPage));

  useEffect(() => {
    const value = showPerPage * counter;
    const startValue = value - showPerPage;
    const endValue = value;
    onPaginationChange(startValue, endValue);
  }, [counter, filterData]);

  function onPaginationChange(start, end) {
    return filterData.length === 1
      ? setPagination({ start: 0, end: showPerPage })
      : setPagination({ start: start, end: end });
  }

  function onButtonChange(type) {
    if (type === "prev") {
      return counter === 1 ? setCounter(1) : setCounter(counter - 1);
    }
    if (type === "next") {
      return counter === 9 ? setCounter(9) : setCounter(counter + 1);
    }
  }

  return {
    pagination,
    counter,
    numberOfButtons,
    setCounter,
    onButtonChange,
  };
}
