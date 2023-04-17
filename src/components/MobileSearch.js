import { Box } from "@mui/material";
import { SlMagnifier } from "react-icons/sl";
import React, { useContext } from "react";
import { AppbarContext } from "../context/AppbarContext";

const MobileSearch = () => {
  const { showMobileSearch } = useContext(AppbarContext);
  return (
    <Box
      className={`mobile-search-wrapper ${
        !showMobileSearch && "mobile-search-close"
      } `}
    >
      <Box className="mobile-search-container">
        <SlMagnifier className="mobile-search-icon" />
        <input type="search" placeholder="Search" className="mobile-search" />
      </Box>
    </Box>
  );
};

export default MobileSearch;
