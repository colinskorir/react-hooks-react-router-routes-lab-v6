import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return <p>No movie data available</p>;
  }

  return (
    <article>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;