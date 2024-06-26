import Paint from "../assets/paint.png"
import Navigation from "./Navigation";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import "../index.css";

function Header() {
  const buttonRef = useRef(null);

  const handleLinkClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <h1 className="navbar-brand" id="title" style={{backgroundImage: `url(${Paint})`}}>
        <span className="sam">SAM</span>{" "}
        <span className="breslin">BRESLIN</span>
      </h1>
      <button
        ref={buttonRef}
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <Navigation onLinkClick={handleLinkClick} />
      </div>
    </nav>
  );
}

export default Header;
