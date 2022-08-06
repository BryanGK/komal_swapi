import React from "react";

export default function Pagination({ counter, onButtonChange }) {
  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center m-4">
        <li className={`page-item ${counter === 1 ? "disabled" : null} `}>
          {/* <li className="page-item"> */}
          <a
            className="page-link"
            href="#"
            onClick={() => onButtonChange("prev")}
          >
            Prev
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={() => onButtonChange("next")}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
