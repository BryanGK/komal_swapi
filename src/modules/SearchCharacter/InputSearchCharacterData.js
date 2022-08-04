import React from "react";

export default function InputSearchCharacterData({
  name,
  value,
  handleChange,
  displayFilterData,
}) {
  return (
    <nav className="navbar">
      <div className="d-flex flex-row container-fluid justify-content-center">
        <form className="d-flex mb-3" role="search">
          <div className="col-xs-5">
            <input
              type="search"
              className="form-control me-5"
              placeholder="Search Character by name..."
              name={name}
              value={value}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-outline-success mx-3"
            onClick={displayFilterData}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
