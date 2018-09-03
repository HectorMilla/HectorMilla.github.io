import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="info">
          <span>Hours of Operation: </span>
          <p style={{ color: "yellow" }}>
            Monday–Thursday, 11 a.m.–10 p.m. Friday {"&"}
            Saturday, 11 a.m.–11 p.m. Sunday, 11 a.m.–9 p.m.
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
