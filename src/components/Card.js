import React, { useState, useEffect } from "react";
import { ORIGINAL_IMG } from "env";
import { Typography } from "@mui/material";
import { AiOutlineHeart, AiFillHeart } from "react-icons/Ai";

const Card = ({ id, poster, title }) => {
  const [isFillColor, setIsFillColor] = useState(false);
  const [favorite, setFavorite] = useState({
    id: 0,
    img: "",
    title: "",
  });

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  return (
    <div className="card">
      <div className="card-image">
        <div className="card-icons">
          {isFillColor ? (
            <AiFillHeart onClick={() => setIsFillColor(false)} />
          ) : (
            <AiOutlineHeart
              onClick={() => {
                setFavorite({ ...favorite, id: id, img: poster, title: title });
                setIsFillColor(true);
              }}
            />
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
