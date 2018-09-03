import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="home-bg">
          <div>
            <h6 style={{ color: "gold" }}>Welcome</h6>
            <h1 className="lg-heading">La Cocina</h1>
          </div>
        </div>
        <div className="home-info">
          <span>Hours of Operation: </span>
          <p style={{ color: "yellow" }}>
            Monday–Thursday, 11 a.m.–10 p.m. <br /> Friday {"&"}
            Saturday, 11 a.m.–11 p.m. Sunday, 11 a.m.–9 p.m.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
