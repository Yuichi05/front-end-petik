import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div class="container">
      <section class="hero">
        <div class="hero-left">
          <h2 class="hero-title">Title</h2>
          <h3 class="hero-genre">Genre :</h3>
          <p class="hero-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla
            accusamus! Totam distinctio velit, quia illo exercitationem omnis
            quos quae non laborum ipsum repellendus labore.
          </p>
          <p class="hero-button">watch</p>
        </div>
        <div class="hero-right">
          <img src="https://picsum.photos/200" alt="hero-img" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
