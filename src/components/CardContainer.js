import React, { useState, useEffect } from "react";
import { API_KEY } from "env";
import Card from "./Card";
import axios from "axios";
import { Container } from "@mui/material";

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  marginTop: "6rem",
  marginBottom: "2rem",
};

const CardContainer = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      setMovies(res.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <Container>
      <div style={container}>
        {movies.map((movie) => (
          <Card
            poster={movie.poster_path || movie.backdrop_path}
            title={movie.title}
            rating={movie.vote_average - 2}
          />
        ))}
      </div>
    </Container>
  );
};

export default CardContainer;
