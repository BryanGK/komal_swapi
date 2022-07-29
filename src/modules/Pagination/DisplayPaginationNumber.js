import React from "react";

export default function DisplayPaginationNumber() {
  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        <li className="page-item disabled">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
}