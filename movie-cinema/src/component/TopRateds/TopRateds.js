import React, { useEffect, useState } from "react";
import Top from "../TopRated/TopRated.js";
import { getTopRated } from "../../api2";
import "./TopRateds.css";

const Topr = () => {
  const [Topr, setTop] = useState([]);

  useEffect(() => {
    // Ambil data film dari API saat komponen dimuat
    getTopRated().then((result) => {
      setTop(result);
    });
  }, []);

  return (
    <div className="toprat-container">
      <h2 className="toprat-heading">Top Rated Movies</h2>
      <div className="toprat">
        {Topr.map((data) => (
          <Top
            key={data.id}
            id={data.id}
            title={data.original_name}
            rilis={data.first_air_date}
            poster={data.poster_path}
            votea={data.vote_average}
            votec={data.vote_count}
          />
        ))}
      </div>
    </div>
  );
};

export default Topr;
