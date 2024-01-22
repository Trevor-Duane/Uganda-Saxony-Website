import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ContactForm({ innerRef, onSubmit }) {
  return (
    <form ref={innerRef} className="userContactForm">
      <h6 className="tableSectionsHead">Write to us</h6>
      <div className="row mb-4">
        <div className="col-md-4 col-sm-12 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            name="from_name"
          />
        </div>
        <div className="col-md-4 col-sm-12 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
            name="from_email"
          />
        </div>

        <div className="col-md-4 col-sm-12 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            name="from_mobile"
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 col-sm-12 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Location or Address"
            name="from_address"
          />
        </div>
        <div className="col-md-4 col-sm-12 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Organisation Name"
            name="from_organisation"
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <label for="exampleFormControlTextarea1" className="form-label">
            Additional Information and Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Type your message here..."
            rows="6"
            name="message"
          ></textarea>
        </div>
      </div>

      <Button className="formButton" type="submit" onSubmit={onSubmit}>
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
