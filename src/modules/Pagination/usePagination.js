import { useState, useEffect } from "react";

export default function usePagination(tableData) {
  const [showPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButtons] = useState(
    Math.ceil(tableData.length / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    const startValue = value - showPerPage;
    const endValue = value;
    onPaginationChange(startValue, endValue);
  }, [counter]);

  function onPaginationChange(start, end) {
    setPagination({ start: start, end: end });
  }

  function onButtonChange(type) {
    if (type === "prev") {
      return counter === 1 ? setCounter(1) : setCounter(counter - 1);
    }
    if (type === "next") {
      return counter === numberOfButtons
        ? setCounter(numberOfButtons)
        : setCounter(counter + 1);
    }
  }

  return {
    showPerPage,
    pagination,
    counter,
    numberOfButtons,
    setCounter,
    setNumberOfButtons,
    onPaginationChange,
    onButtonChange,
  };
}
