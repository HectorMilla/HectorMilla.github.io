import React from "react";
import PropTypes from "prop-types";
// import Footer from "../Footer";
const menuSlider = props => {
  return (
    <div className="menu-slider">
      <h1>
        <i className="fas fa-chevron-circle-left" /> {props.course}{" "}
        <i className="fas fa-chevron-circle-right" />
      </h1>

      <img
        src="http://www.lacocinanc.com/inc/files/editor/image/menu-2018/appetizers.jpg"
        alt=""
      />
    </div>
  );
};

export default menuSlider;
