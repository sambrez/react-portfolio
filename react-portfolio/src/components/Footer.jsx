function Footer() {
  return (
    <footer className="container" id="footer">
      <div id="bottom" className='row'>
        <p className='col-4' id="footer-one">
          <a href='https://github.com/sambrez'>
          <img id="github" src="../../img/github.svg" />
          </a>
        </p>
        <p  className='col-4' id="footer-two">
          <a href='https://www.linkedin.com'>
          <img id="linkedin" src="../../img/linkedin.svg" />
          </a>
        </p>
        <p  className='col-4' id="footer-three">
          <a href='https://www.instagram.com'>
          <img id="instagram" src="../../img/instagram.svg" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
