import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo .svg";
import menubar from "../images/menu_svg.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <img src={logo} alt="little lemon restaurant logo" />
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menubar} alt="burger menu icon" />
      </div>
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <Link className="nav-link" to="/" onClick={toggleMenu}>
          <h4>Home</h4>
        </Link>
        <Link className="nav-link" to="/about" onClick={toggleMenu}>
          <h4>About</h4>
        </Link>
        <Link className="nav-link" to="/" onClick={toggleMenu}>
          <h4>Services</h4>
        </Link>
        <Link className="nav-link" to="/menu" onClick={toggleMenu}>
          <h4>Menu</h4>
        </Link>
        <Link className="nav-link" to="/reservations" onClick={toggleMenu}>
          <h4>Reservations</h4>
        </Link>
        <Link className="nav-link" to="/menu" onClick={toggleMenu}>
          <h4>Order Online</h4>
        </Link>
        <Link className="nav-link" to="/" onClick={toggleMenu}>
          <h4>Login</h4>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
