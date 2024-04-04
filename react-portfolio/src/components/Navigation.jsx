/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation({ onLinkClick }) {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{ marginLeft: "auto" }}>
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
          onClick={onLinkClick} 
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
          onClick={onLinkClick} 
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
          onClick={onLinkClick} 
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
          onClick={onLinkClick} 
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
