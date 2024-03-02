import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <>
      <h2>
        Download my{" "}
        <a
          href="https://drive.google.com/file/d/1cffRW8koTycghkFh3qqQ9Ietz7TTk5hP/view?usp=sharing"
          download
        >
          resume!
        </a>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Front-End Proficiencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>HTML</td>
            <td>CSS</td>
            <td>JavaScript</td>
            <td>JQuery</td>
            <td>BootStrap</td>
            <td>React</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Back-End Proficiencies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>APIs</td>
            <td>Node.js</td>
            <td>Express.js</td>
            <td>MySQL & Sequelize</td>
            <td>MongoDB & Mongoose</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Resume;
