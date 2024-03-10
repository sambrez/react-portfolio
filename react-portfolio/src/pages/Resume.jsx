import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Resume.css";
import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <>
      <h2 id='download'>
        Download my{" "}
        <a
          href={resume}
          download
        >
          resume!
        </a>
      </h2>
      <table className="table">
        <thead>
          <tr className='one'>
            <th  className='front' scope="col">Front-End Proficiencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='list' scope="row">
            <td className='col-2'>HTML</td>
            <td className='col-2'>CSS</td>
            <td className='col-2'>JavaScript</td>
            <td className='col-2'>JQuery</td>
            <td className='col-2'>BootStrap</td>
            <td className='col-2'>React</td>
            </th> 
          </tr>
        </tbody>
      </table>
      <br/>
      <table className="table">
        <thead>
          <tr className='one'>
            <th  className='front' scope="col">Back-End Proficiencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='list' scope="row">
            <td className='col-2'>APIs</td>
            <td className='col'>Node.js</td>
            <td className='col'>Express.js</td>
            <td className='col'>MySQL & Sequelize</td>
            <td className='col'>MongoDB & Mongoose</td>
            </th> 
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Resume;
