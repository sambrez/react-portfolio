import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Resume.css";
import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <>
      <h2 id='download'>
        Download my{" "}
        <a
          id="resume"
          href={resume}
          download
        >
          resume
        </a>
      </h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className='one'>
              <th className='front' scope="col">Front-End Proficiencies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='list'>HTML</td>
              <td className='list'>CSS</td>
              <td className='list'>JavaScript</td>
              <td className='list'>JQuery</td>
              <td className='list'>BootStrap</td>
              <td className='list'>React</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className='one'>
              <th className='front' scope="col">Back-End Proficiencies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='list'>APIs</td>
              <td className='list'>Node.js</td>
              <td className='list'>Express.js</td>
              <td className='list'>MySQL & Sequelize</td>
              <td className='list'>MongoDB & Mongoose</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Resume;
