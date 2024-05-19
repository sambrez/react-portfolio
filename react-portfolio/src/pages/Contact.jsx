import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <h2 id='reach'>Reach Out!</h2>
      <form id="form" name="contact" action="/contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
        <label className='label'>NAME:</label>
        <input className="form-control" type="text" name="name" required />
        </div>
        <div className="form-group">
        <label className='label'>EMAIL:</label>
        <input className="form-control" type="email" name="email" required />
        </div>
        <div className="form-group">
        <label className='label'>MESSAGE:</label>
        <textarea className="form-control" name="message" rows="5" cols="60" required></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact;
