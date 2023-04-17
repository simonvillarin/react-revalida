import React, { useState } from "react";
import { ORIGINAL_IMG } from "env";
import { Rating, Typography } from "@mui/material";
import { AiOutlineHeart, AiFillHeart } from "react-icons/Ai";

const Card = ({ poster, title, rating }) => {
  const [isFillColor, setIsFillColor] = useState(false);
  return (
    <div className="card">
      <div className="card-image">
        <div className="card-icons">
          {isFillColor ? (
            <AiFillHeart onClick={() => setIsFillColor(false)} />
          ) : (
            <AiOutlineHeart onClick={() => setIsFillColor(true)} />
          )}
        </div>
        <img src={`${ORIGINAL_IMG}${poster}`} alt={title} />
      </div>
      <div className="card-content">
        <div>
          <Typography variant="body2" className="card-title">
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Card;
