import React from "react";

export default function SearchCharacter({ name, inputValue, handleChange }) {
  return (
    <nav className="navbar mb-3">
      <div className="d-flex flex-row container-fluid justify-content-center">
        <form className="d-flex" role="search">
          <div className="col-xs-5">
            <input
              type="search"
              className="form-control me-5"
              placeholder="Search Character by name..."
              name={name}
              value={inputValue}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
