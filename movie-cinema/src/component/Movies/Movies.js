import React from "react";
import Movie from "../Movie/Movie.js";
import "../Movie/Movie.css";
const Movies = () => {
  const datas = [
    {
      title: "Judul film 1",
      year: 2024,
      genre: "Action",
      poster: "https://picsum.photos/201",
    },
    {
      title: "Judul film 2",
      year: 2024,
      genre: "Adventure",
      poster: "https://picsum.photos/202",
    },
    {
      title: "Judul film 3",
      year: 2024,
      genre: "Cars",
      poster: "https://picsum.photos/203",
    },
    {
      title: "Judul film 4",
      year: 2024,
      genre: "Comedy",
      poster: "https://picsum.photos/204",
    },
    {
      title: "Judul film 5",
      year: 2024,
      genre: "Demons",
      poster: "https://picsum.photos/205",
    },
    {
      title: "Judul film 6",
      year: 2024,
      genre: "Drama",
      poster: "https://picsum.photos/206",
    },
    {
      title: "Judul film 7",
      year: 2024,
      genre: "Ecchi",
      poster: "https://picsum.photos/207",
    },
    {
      title: "Judul film 8",
      year: 2024,
      genre: "Fantasy",
      poster: "https://picsum.photos/208",
      },
      {
        title: "Judul film 9",
        year: 2024,
        genre: "Game",
        poster: "https://picsum.photos/209",
      },
      {
        title: "Judul film 10",
        year: 2024,
        genre: "Harem",
        poster: "https://picsum.photos/210",
      },
      {
        title: "Judul film 11",
        year: 2024,
        genre: "Isekai",
        poster: "https://picsum.photos/211",
      },
      {
        title: "Judul film 12",
        year: 2024,
        genre: "School",
        poster: "https://picsum.photos/212",
      },
  ];
  return (
    <div>
      <h2>Latest Movies</h2>
      <div class="movies-container">
        {datas.map((data, index) => {
          return (
            <Movie
              title={data.title}
              year={data.year}
              genre={data.genre}
              poster={data.poster}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
