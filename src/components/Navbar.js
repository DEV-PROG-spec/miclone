import React from "react";
import "../styles/Navbar.css";
import { logo } from "../data/data.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img id="logoImage" src={logo} alt="Not" />
          sds
        </Link>
        <a className="navlinks" href="/#miphones">
          Mi Phones
        </a>
        <a className="navlinks" href="/#redmiphones">
          Redmi Phones
        </a>
        <a className="navlinks" href="/#tv">
          TV
        </a>
        <a className="navlinks" href="/#laptops">
          Laptops
        </a>
        <a className="navlinks" href="/#lifestyle">
          Fitness & Lifestyle
        </a>
        <a className="navlinks" href="/#home">
          Home
        </a>
        <a className="navlinks" href="/#audio">
          Radio
        </a>
        <a className="navlinks" href="/#accessories">
          Accessories
        </a>
      </div>
    </div>
  );
};

export default Navbar;
