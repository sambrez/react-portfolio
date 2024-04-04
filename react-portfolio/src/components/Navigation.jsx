import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation({ onLinkClick }) {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
          onClick={onLinkClick} // Close the navbar when a link is clicked
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
          onClick={onLinkClick} // Close the navbar when a link is clicked
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
          onClick={onLinkClick} // Close the navbar when a link is clicked
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
          onClick={onLinkClick} // Close the navbar when a link is clicked
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
