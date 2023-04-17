import React from "react";
import { SlMagnifier } from "react-icons/sl";

const Search = () => {
  return (
    <div className="search-container">
      <SlMagnifier className="search-icon" />
      <input type="search" placeholder="Search" className="search" />
    </div>
  );
};

export default Search;
