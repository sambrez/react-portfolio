import Project from "../components/Project";
import img1 from "/img/placeholder.jpg";

const projects = [
  {
    id: 1,
    image: img1,
    title: "Project 1",
    link: "https://github.com/sambrez",
    repo: "https://github.com/sambrez/react-portfolio",
  },
  {
    id: 2,
    image: img1,
    title: "Project 2",
    link: "https://github.com/sambrez",
    repo: "https://github.com/sambrez/react-portfolio",
  },
  {
    id: 3,
    image: img1,
    title: "Project 3",
    link: "https://github.com/sambrez",
    repo: "https://github.com/sambrez/react-portfolio",
  },
  {
    id: 4,
    image: img1,
    title: "Project 4",
    link: "https://github.com/sambrez",
    repo: "https://github.com/sambrez/react-portfolio",
  },
  {
    id: 5,
    image: img1,
    title: "Project 5",
    link: "https://github.com/sambrez",
    repo: "https://github.com/sambrez/react-portfolio",
  },
  {
    id: 6,
    image: img1,
    title: "Project 6",
    link: "https://github.com/sambrez",
    repo: "https://github.com/sambrez/react-portfolio",
  },
];

function Portfolio() {
    return (
        <div>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <Project project={project} />
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Portfolio;
