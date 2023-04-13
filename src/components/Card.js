import React from "react";
import { ORIGINAL_IMG } from "env";
import { Rating, Typography } from "@mui/material";

const cardContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",
};

const cardImage = {
  height: "380px",
};

const img = {
  width: "100%",
  height: "100%",
};

const cardContent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",
};

const card = {};

const Card = ({ poster, title, rating }) => {
  return (
    <div style={cardContainer}>
      <div style={cardImage}>
        <img src={`${ORIGINAL_IMG}${poster}`} alt={title} style={img} />
      </div>
      <div style={cardContent}>
        <div>
          <Typography variant="body2">{title}</Typography>
        </div>
        <div>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
