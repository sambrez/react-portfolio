import Project from "../components/Project";
import img1 from "../assets/tech-blog.png";
import img2 from "../assets/cosmic.png";
import img3 from "../assets/weather.png";
import img4 from "../assets/note-taker.png";
import img5 from "../assets/coding-quiz.png";
import img6 from "../assets/literary.png"

import "../styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    id: 1,
    image: img1,
    title: "Technology Blog",
    link: "https://techblog-mvc-14-85eba46978d7.herokuapp.com",
    repo: "https://github.com/sambrez/MVC-Tech-Blog",
  },
  {
    id: 2,
    image: img2,
    title: "Cosmic Counsel",
    link: "https://conartisttt.github.io/Cosmic-Counsel",
    repo: "https://github.com/sambrez/Cosmic-Counsel",
  },
  {
    id: 3,
    image: img3,
    title: "Weather Dashboard",
    link: "https://sambrez.github.io/weather-dashboard",
    repo: "https://github.com/sambrez/weather-dashboard",
  },
  {
    id: 4,
    image: img4,
    title: "Note Taker",
    link: "https://brez-note-taker-app-5ed47cdd234f.herokuapp.com",
    repo: "https://github.com/sambrez/express.js-note-taker-app",
  },
  {
    id: 5,
    image: img5,
    title: "Coding Quiz",
    link: "https://sambrez.github.io/coding-bootcamp-student-quiz",
    repo: "https://github.com/sambrez/coding-bootcamp-student-quiz",
  },
  {
    id: 6,
    image: img6,
    title: "Literary Voyagers",
    link: "https://literary-voyagers-5d41db9d0f86.herokuapp.com",
    repo: "https://github.com/sambrez/Literary-Voyagers",
  },
];

function Portfolio() {
    return (
        <div>
          <ul id="project-list">
            {projects.map((project) => (
              <li id='list' key={project.id}>
                <Project project={project} />
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Portfolio;
