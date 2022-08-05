import React from "react";

export default function LoadingSpinner({ loading }) {
  const size = {
    width: "3rem",
    height: "3rem",
  };
  return (
    <div className="spinner d-flex justify-content-center">
      {loading && (
        <div className="spinner-border m-5" style={size} role="status">
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
}
