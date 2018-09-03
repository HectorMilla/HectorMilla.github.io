import React, { Component } from "react";
import { Link } from "react-router-dom";

class SpecialOffers extends Component {
  render() {
    return (
      <div className=" special ">
        <h4>
          Experience Great Savings at Our <br />
          Mexican Restaurant!
        </h4>
        <img
          src="http://www.lacocinanc.com/inc/files/editor/image/coupon/coupon.png"
          alt=""
        />

        <div className="buttons">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "30%"
            }}
          >
            Print Coupon
          </button>
          <p>
            Join our Birthday Club and enjoy special offers to help celebrate
            your birthday.
          </p>
          <Link to="/contactus" className="b-day">
            <button type="button" className="btn btn-primary">
              Join Our Birthday Club!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SpecialOffers;
