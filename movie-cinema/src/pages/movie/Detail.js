import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  // menggunakan useParams untuk menangkap parameter id dari url
  let { id } = useParams();
  return (
    <div>
      <h1>Detail Movies</h1>
      <p>Parameter id : {id}</p>
    </div>
  );
};

export default Detail;
