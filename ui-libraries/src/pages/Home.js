import React from "react";
import Hero from "../component/Hero";
import Movies from "../component/Movies";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Movies />
      <Footer/>
    </div>
  );
};

export default Home;
