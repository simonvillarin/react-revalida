import React from "react";
import { SlMagnifier } from "react-icons/sl";

const searchContainer = {
  position: "relative",
};

const searchIcon = {
  position: "absolute",
  top: "50%",
  left: "1rem",
  transform: "translateY(-50%)",
  color: "#000",
};

const search = {
  minWidth: "18rem",
  padding: ".625rem 1rem .625rem 2.5rem",
  borderRadius: "100vmax",
  fontFamily: "Open Sans, sans-serif",
  outline: "none",
  border: "none",
};

const Search = () => {
  return (
    <div style={searchContainer}>
      <SlMagnifier style={searchIcon} />
      <input type="search" placeholder="Search" style={search} />
    </div>
  );
};

export default Search;
