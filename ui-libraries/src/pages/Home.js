import React from "react";
import Hero from "../component/Hero";
import Products from "../component/Product";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Products />
      <Footer/>
    </div>
  );
};

export default Home;
