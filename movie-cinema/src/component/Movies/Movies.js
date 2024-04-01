import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie.js";
import "../Movie/Movie.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import { getMovieList } from "../../api.js";

const Movies = () => {
  // const [nama, setNama] = useState("Ucup");

  // console.log(nama);

  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    const movie = {
      title: "Amazing Spibenermen",
      year: "2012",
      genre: "RPG",
      poster: "https://picsum.photos/213",
    };
    setDatas([...datas, movie]);
    // setNama(["Budi"]);
  };
  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  };

  useEffect(() => {
    // menangkap data result api
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);

  console.log(datas);

  return (
    <div>
      <h2>Trending</h2>
      <div class="movies-container">
        {datas.map((data, index) => {
          return (
            <Movie
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
            />
          );
        })}
        {/* <button onClick={handleClick}>Add Movie</button>  menambahkan movie baru menggunakan button*/}
      </div>
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;
