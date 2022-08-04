import React from "react";

export default function LoadingSpinner({ loading }) {
  // const size = {
  //   width: 3 rem,
  //   height: 3 rem,
  // };
  return (
    <div className="spinner d-flex justify-content-center">
      {loading && (
        <div
          className="spinner-border m-5"
          // style="width: 3rem; height: 3rem;"
          //"NOT WORKING WHY???"
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
}

//How to increase the size of a spinner???
