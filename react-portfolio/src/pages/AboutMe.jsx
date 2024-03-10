/* eslint-disable react/no-unescaped-entities */
import Profile from "../assets/IMG_2186.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutMe.css";

function About() {
  return (
    <div className="container">
      <h2 id="name">Sam Breslin</h2>
      <p id="web">Web Developer</p>
      <div id="writing" className="row">
        <div className="col">
          <img src={Profile}></img>
        </div>
        <div className="col container">
            <div id='space' className='row'></div>
          <p className="center row">
            Hi there! I'm Sam, a 29 year-old from New England. I have a
            Bachelor's of Science in Sustainable Agriculture & Food Systems from
            the University of New Hampshire and have spent the last six years
            working as a winemaker.{" "}
          </p>
          <p className="center row">
            Working for a small business has meant that I have had the
            opportunity to take on projects well outside my winemaking and
            vineyard management responsibilities. Many of the those projects
            have revolved around web design, eCommerce, and database management
            which sparked an insatiable curiosity in the world of web
            development.
          </p>
          <p className="center row">
            I have spent the last six months intensely studing the basics of web
            design and development and greatly look forward to continuing my
            education and exploring a new field of work and study!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
