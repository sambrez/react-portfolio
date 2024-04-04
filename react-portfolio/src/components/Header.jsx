import Navigation from "./Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css"; 

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <h1 className="navbar-brand" id="title">SAM BRESLIN</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end ml-40" id="navbarNav">
        <Navigation />
      </div>
    </nav>
  );
}

export default Header;
