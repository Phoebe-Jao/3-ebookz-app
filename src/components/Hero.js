import React from "react";
import "./styles/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        src={require("../images/photo-grid.png")}
        className="hero--photogrid"
        alt="A photo grid featuring various photos of ebook tablets and people using them"
      />
      <div className="hero--text">
        <h1 className="hero--heading">Get started on your reading</h1>
        <p className="hero--paragraph">
          Sunt commodo culpa Lorem aute culpa. Est officia minim ex laborum
          commodo fugiat aliquip amet in nostrud eu occaecat ut. Duis excepteur
          fugiat officia excepteur ipsum aute exercitation pariatur commodo
          fugiat enim sint enim id.
        </p>
      </div>
    </div>
  );
}

export default Hero;
