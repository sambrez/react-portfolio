import "../styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Project(props) {
  const project = props;
  console.log(project);
  return (
    <div
      className="pic pic:hover"
      id="image"
      style={{ backgroundImage: `url(${project.project.image})` }}
    >
      <div className="imgtext row" id="div2">
        <div id='pro-title' className='col-12'>
          <h2>{project.project.title}</h2>
        </div>
        <div id="link-one" className='col-12'>
          <a href={project.project.link}>Visit the live application</a>
        </div>
        <div id="link-two" className='col-12'>
          <a href={project.project.repo}>View the project repository</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
