

function Project(props) { 
  const project = props;
  console.log(project);
  return (
      <>
        <div>
          <img src={project.project.image}/>
          <h2>{project.project.title}</h2>
          <a href={project.project.link}>APP</a>
          <a href={project.project.repo}>REPO</a>
        </div>
      </>
    );
  }
 


export default Project;
