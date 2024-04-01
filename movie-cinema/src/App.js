import { Component } from "react";
import "./App.css";
import Header from "./component/Navbar/Navbar.js";
import Main from "./component/Main/Main.js";
import Footer from "./component/Footer/Footer.js";
// import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Popular from "./pages/movie/Popular.js";
import TopRated from "./pages/movie/Toprated.js";
import Detail from "./pages/movie/Detail.js";
import Navbar from "./component/Navbar/Navbar.js";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <Main /> */}
      <Footer nama="Yuichi" />
    </div>
  );
}

export default App;
