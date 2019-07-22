/** This component is meant to display a search field and execute the search for characters.  */

import React from "react";

const Search = ({ searchChange }) => {
  return (
    <div className="search">
      <input
        className="search-input"
        type="search"
        placeholder="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
