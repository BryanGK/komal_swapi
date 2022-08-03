import React from "react";

export default function LoadingSpinner({ loading }) {
  // const size = {
  //   width: 5,
  //   height: 5,
  // };
  return (
    <div className="d-flex justify-content-center">
      {loading && (
        <div
          className="spinner-border"
          // style="width: 3rem; height: 3rem;"NOT WORKING WHY???"
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
}

//How to increase the size of a spinner???
