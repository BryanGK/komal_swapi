import React from "react";

export function Pagination({ getCharacterData, nextPage, prevPage }) {
  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center m-4">
        <li className={`page-item`}>
          <a
            className="page-link"
            href="#"
            onClick={() => getCharacterData(prevPage)}
          >
            Prev
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            onClick={() => getCharacterData(nextPage)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
