import React, { Component } from "react";
import MenuSlider from "./MenuSlider";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <MenuSlider course="Appetizers" />
      </div>
    );
  }
}
export default Menu;
