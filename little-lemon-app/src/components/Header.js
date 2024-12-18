import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../images/headerImg.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="header-img">
          <img src={headerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
