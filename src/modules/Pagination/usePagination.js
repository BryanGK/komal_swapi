import { useState, useEffect } from "react";

export default function usePagination(filterData) {
  const [showPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter, filterData]);

  function onPaginationChange(start, end) {
    return filterData.length >= 1 && filterData.length <= 10
      ? setPagination({ start: 0, end: showPerPage })
      : setPagination({ start: start, end: end });
    // if (filterData.length >= 1 && filterData.length <= 10) {
    //   console.log(start, end);
    //   setPagination({ start: 0, end: showPerPage });
    // } else {
    //   console.log(start, end);
    //   setPagination({ start: start, end: end });
    // }
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
    counter,
    pagination,
    onButtonChange,
  };
}
