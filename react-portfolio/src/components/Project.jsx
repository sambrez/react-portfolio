function Project ({projects: { image, title, link, repo } }) {

  return (
    <>
      <img src={image}>
              <span>
                <h4>{title}</h4>
                <p>
                  <a href={link}>Application</a>
                </p>
                <p>
                <a href={repo}>Repository</a>
                </p>
              </span>
            </img>
    </>
  );
}

export default Project;