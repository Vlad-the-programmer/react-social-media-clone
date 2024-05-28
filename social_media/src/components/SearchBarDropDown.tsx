import React, { ReactNode, useEffect, useState } from "react";
import SearchLine from "./SearchLine";
import { addSearches, getSearches } from "../utils/db";

type SearchBarDropDownProps = {
  children: ReactNode;
};

const getDropDownItems = (dropItems: Array<any>) => {
  return dropItems.map((v, i) => {
    return <SearchLine key={i} index={i.toString()} text={v} />;
  });
};

export default function SearchBarDropDown(props: SearchBarDropDownProps) {
  const [searchRequest, setSearchRequest] = useState("");
  const [searches, setSearches] = useState(getSearches());

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (searchRequest !== "") {
      addSearches(searchRequest);
      setSearches(getSearches());
    }
  };

  useEffect(() => {
    setSearches(getSearches());
  }, [searches]);
  return (
    <div className="dropdown mx-2">
      <a
        className="dropdown-toggle nav-link"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        {props.children}
      </a>
      <ul
        className="dropdown-menu dropdown-menu-lg-start text-small my-3 overflow-scroll"
        style={{
          height: "400px",
          width: "300px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <li>
          <h6 className="dropdown-header">Search: </h6>
          <form onSubmit={handleSearchSubmit} method="POST">
            <input
              id="searchInput"
              name="searchRequest"
              className="ms-2 mb-4"
              value={searchRequest}
              onChange={({ target }) => {
                setSearchRequest(target.value);
              }}
            />
            <button id="searchBtn" className="btn btn-success ms-2">
              Search
            </button>
          </form>
        </li>
        {getDropDownItems(searches)}
      </ul>
    </div>
  );
}
