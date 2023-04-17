import React, { useState, useEffect, createContext } from "react";
import { API_KEY } from "env";
import axios from "axios";

export const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const getShows = async (URL, setter) => {
    const res = await axios.get(URL);
    setter(res.data.results);
  };

  useEffect(() => {
    getShows(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      setTrending
    );
    getShows(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      setMovies
    );
    getShows(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`,
      setSeries
    );
  }, []);

  return (
    <APIContext.Provider value={{ trending, movies, series }}>
      {children}
    </APIContext.Provider>
  );
};
