import { Link, useLocation } from "react-router-dom";

import "../styles/Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="col">
      <ul className="row" id="navigation">
        <li className="col-lg" id="nav-one" >
          <Link
            to="/About"
            className={
              currentPage === "/About" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </Link>
        </li>
        <li className="col-lg" id="nav-two">
          <Link
            to="/Portfolio"
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="col-lg" id="nav-three">
          <Link
            to="/Resume"
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
        <li className="col-lg" id="nav-four">
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
