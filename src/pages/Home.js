import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hometorta.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Slatka kuća </h1>
        <p> Dobrodošli u naš svet poslastica!</p>
        <Link to="/menu">
          <button> Naši proizvodi </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
