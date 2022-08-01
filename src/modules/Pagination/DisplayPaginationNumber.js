import React from "react";

export default function DisplayPaginationNumber({ onButtonChange }) {
  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={() => onButtonChange("prev")}
          >
            prev
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
