import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div id="contact">
        <div className="container">
          <h4>Contact Us</h4>
          <p>
            Thank you for visiting our Web site. Please fill out the following
            form to request information about our products and services or to
            provide feedback about our site. When you are finished, click the
            'Submit' button to send us your message. You will see a confirmation
            below.
          </p>
        </div>
        <form className="container">
          <div className="form-group">
            <label htmlFor="firstname">First Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="commetns">Comments: </label>
            <textarea
              name="comments"
              className="form-control"
              cols="20"
              rows="5"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            {" "}
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default ContactUs;
