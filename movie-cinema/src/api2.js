import React from "react";
import axios from "axios";

const apiKey = "8e465ff28280979967a70c1462d19f7f";

export const getTopRated = async () => {
  const top = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`
  );

  return top.data.results;
};

export const getDetailtop = async (id) => {
  const top = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`
  );
  return top.data.results;
};