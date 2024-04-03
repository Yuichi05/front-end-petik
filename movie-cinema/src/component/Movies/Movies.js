import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getMovieList } from "../../api";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Ambil data film dari API saat komponen dimuat
    getMovieList().then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <div className="movies">
      <h2 className="movies-heading">Trending Movies</h2>
      <div className="movies-container">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.release_date}
            poster={movie.poster_path}
          />
        ))}
      </div>
      <AddMovieForm />
    </div>
  );
};

export default Movies;
