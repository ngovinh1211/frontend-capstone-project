import { Link } from "react-router-dom";
import footerLogo from "../images/footerLogo.png";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div>
          <img
            src={footerLogo}
            alt="Little Lemon logo"
            className="footer-img"
          />
          {/* <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p> */}
        </div>
        <div className="footer-columns">
          <h3>Links</h3>
          <ul>
            <Link className="nav-link" to="/">
              <h4 className="footer-link">Home</h4>
            </Link>
            <Link className="nav-link" to="/about">
              <h4 className="footer-link">About</h4>
            </Link>
            <Link className="nav-link" to="/menu">
              <h4 className="footer-link">Menu</h4>
            </Link>
            <Link className="nav-link" to="/reservations">
              <h4 className="footer-link">Reservations</h4>
            </Link>
            <Link className="nav-link" to="/menu">
              <h4 className="footer-link">Order Online</h4>
            </Link>
            <Link className="nav-link" to="/">
              <h4 className="footer-link">Login</h4>
            </Link>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br /> 123 Bear Street, Chicago
            </li>
            <li>
              Phone: <br /> +00 123 456 789
            </li>
            <li>
              Email: <br /> info@littlelemon.com
            </li>
          </ul>
        </div>
        <div className="footer-columns">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">TikTok</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
