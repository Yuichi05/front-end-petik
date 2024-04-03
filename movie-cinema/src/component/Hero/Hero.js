import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <img src="https://picsum.photos/200" alt="Hero" className="hero-img" />
        <div className="hero-content">
          <h1 className="hero-title">PinstaVie</h1>
          <div className="hero-genre">
            Genre :{" "}
            <span className="genre">
              Aksi, Animasi, Barat, Cerita Fiksi, Cerita Seru, Dokumenter,
              Drama, Fantasi, Film TV, Kejahatan, Keluarga, Kengerian, Komedi,
              Misteri, Musik, Percintaan, Petualangan, Sejarah
            </span>
          </div>
          <div className="hero-desc">
            Description :
            <span className="desc">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
          </div>
          <button className="hero-button">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
