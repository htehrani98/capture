import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
  });

  return (
    <div>
      <h1>MovieDetail</h1>
    </div>
  );
};

export default MovieDetail;
