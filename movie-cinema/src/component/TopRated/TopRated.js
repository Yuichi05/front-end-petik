import React from "react";
import { NavLink } from "react-router-dom";
import "./TopRated.css";

const TopRated = (props) => {
  const { title, rilis, votea, votec, poster, id } = props;
  return (
    <div className="movie-card">
      <img
        className="top-image"
        src={`https://image.tmdb.org/t/p/w300/${poster}`}
        alt="gambar"
      />
      <h3 className="top-judul">{title}</h3>
      <h5 className="top-rilis">{rilis}</h5>
      <p className="top-voa">{votea}</p>
      <p className="top-voc">{votec}</p>
    </div>
  );
};

export default TopRated;
