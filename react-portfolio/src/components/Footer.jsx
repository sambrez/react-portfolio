function Footer() {
  return (
    <footer className="container" id="footer">
      <div id="bottom" className='row'>
        <p className='col-4' id="footer-one">
          <a href='https://github.com/sambrez'>
          <img id="github" src="../../public/img/github.svg" />
          </a>
        </p>
        <p  className='col-4' id="footer-two">
          <a>
          <img id="linkedin" src="../../public/img/linkedin.svg" />
          </a>
        </p>
        <p  className='col-4' id="footer-three">
          <a>
          <img id="instagram" src="../../public/img/instagram.svg" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
