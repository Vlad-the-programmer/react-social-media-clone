import React, { useEffect } from "react";
import { deleteSearch, getSearches } from "../utils/db";
import Icon from "./Icon";

type SearchLineProps = {
  text: string;
  index: string;
};

export default function SearchLine(props: SearchLineProps) {
  const handleSearchDelete = (i: string) => {
    deleteSearch(i);
    getSearches();
  };

  return (
    <li className="p-1 border-bottom my-0 py-0" style={{}}>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div className="pt-1">
            <p className="p-0">{props.text}</p>
          </div>
        </div>
        <button
          id="searchDeleteBtn"
          type="button"
          className="btn btn-light"
          aria-label="Close"
          onClick={() => handleSearchDelete(props.index)}
        >
          <Icon width="16" height="16" className="bi bi-x">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </Icon>
        </button>
      </div>
    </li>
  );
}
