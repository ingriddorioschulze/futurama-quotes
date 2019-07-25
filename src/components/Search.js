/** This component is meant to display a search field and execute the search for characters.  */

import React from "react";
import "../components/Search.css";

function debouncer(fn, time) {
  let timeout;

  return function() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn.bind(undefined, ...arguments), time);
  };
}

const Search = ({ searchChange }) => {
  const debouncedSearch = debouncer(searchChange, 350);
  return (
    <div className="search">
      <input
        className="search-input"
        type="search"
        placeholder="search"
        onChange={e => debouncedSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
