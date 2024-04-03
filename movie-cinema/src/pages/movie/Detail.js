import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=8e465ff28280979967a70c1462d19f7f`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie data: ", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="movie-info-container">
      <div className="movie-info-title">
      <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
      </div>
      <div className="movie-info-details">
        <div className="movie-info-director">
          <h3>Title :</h3>
          <p>{movie.title}</p>
        </div>
        <div className="movie-info-popular">
          <h3>Popularity :</h3>
          <p>{movie.popularity}</p>
        </div>
        <div className="movie-info-description">
          <h3>Description :</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
