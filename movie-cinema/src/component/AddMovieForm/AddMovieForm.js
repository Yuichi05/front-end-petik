import React, { useState } from "react";
import "./AddMovieForm.css";

const AddMovieForm = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    image: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(formData);
  };

  return (
    <div className="container">
      <section className="form">
        <div className="form-left">
          <img
            src="https://picsum.photos/200/300"
            alt="img-form"
            className="form-image"
          />
        </div>
        <div className="form-right">
          <h1 className="form-title">Add Movie</h1>
          <form action="">
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Year
              </label>
              <input
                type="text"
                name="year"
                id="year"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Genre
              </label>
              <select
                name="genre"
                id="genre"
                className="form-input"
                onChange={handleChange}
              >
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="fantasy">fantasy</option>
              </select>
            </div>
            <div className="form-inputgroup">
              <label htmlfor="" className="form-label">
                Poster
              </label>
              <input
                type="text"
                name="poster"
                id="poster"
                className="form-input"
                onChange={handleChange}
              />
            </div>
              <button className="form-button" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
