import React from "react";

export default function LoadingSpinner({ loading }) {
  const size = {
    width: "10rem",
    height: "10rem",
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
