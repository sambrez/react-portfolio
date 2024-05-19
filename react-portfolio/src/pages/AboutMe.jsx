/* eslint-disable react/no-unescaped-entities */
import Profile from "../assets/block-image.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutMe.css";

function About() {
  return (
    <div className="container">
      <div id="writing" className="row">
        <div className="col" id="image-stack">
          <img src={Profile} className="img-fluid" alt="Profile"></img>
        </div>
        <div id="paragraphs" className="col container">
          <h2 id="name">Samuel Breslin</h2>
          <p id="web">Web Developer</p>
          <div id="space"></div>
          <p id="pOne" className="center row">
            Hey there! I'm Sam, a 29 year-old from New England. I have a
            Bachelor's of Science in Sustainable Agriculture & Food Systems from
            the University of New Hampshire and have spent the last six years
            working as a winemaker.
          </p>
          <p id="pTwo" className="center row">
            Working for a small business means I have had numerous opportunities
            to take on projects well outside my winemaking and vineyard
            management responsibilities. Many of the those projects involved web
            design, eCommerce, and data management which sparked an insatiable
            interest in the world of web development.
          </p>
          <p id="pThree" className="center row">
            I have spent the last six months intensely studying the basics of
            web design and development and greatly look forward to continuing my
            education and exploring a new field of work and study. The wine
            industry to the tech industry might seem like a sharp pivot, but
            hey, six years ago I wasn't a wine drinker either! More than
            anything I believe in chasing passions, tackling challenges, and
            embracing my natural sense of curiosity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
