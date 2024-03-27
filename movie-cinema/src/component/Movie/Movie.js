import React from "react";

const Movie = (props) => {
  const { title, genre, year, poster } = props;
  return (
    <div className="movie">
      <img src={poster} alt="" />
      <h3 className="title">{title}</h3>
      <p class="year">{year}</p>
      <p class="genre">{genre}</p>
    </div>
  );
};

export default Movie;
