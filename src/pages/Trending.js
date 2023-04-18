import React, { useContext } from "react";
import Card from "../components/Card";
import { Container, Typography } from "@mui/material";
import { APIContext } from "../context/APIContext";

const Trending = () => {
  const { trending } = useContext(APIContext);
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 10, mb: 3 }}>
        TRENDING & TOP RATED
      </Typography>
      <div className="card-container">
        {trending.map((show, index) => (
          <Card
            key={index}
            id={show.id}
            poster={show.poster_path || show.backdrop_path}
            title={show.title || show.name}
            rating={show.vote_average - 2}
          />
        ))}
      </div>
    </Container>
  );
};

export default Trending;
