import React from "react";
import { Typography } from "@mui/material";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  color: "rgba(255, 255, 255)",
  backgroundColor: "#ff4c4c",
  textAlign: "center",
};

const Footer = () => {
  return (
    <div style={style}>
      <Typography variant="body2">
        All Rights Reserved. © Simon James Villarin, Andrei San Miguel, Leo Cruz
      </Typography>
    </div>
  );
};

export default Footer;
