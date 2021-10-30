import React, { Component } from "react";

import Logo from "../components/logo";
import Contact from "../components/contact";
import MenuBoard from "../components/menuBoard";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xl-6 col-6">
            <Logo />
          </div>
          <div className="col-xl-6 col-6">
            <Contact />
          </div>
        </div>
        <MenuBoard />
      </React.Fragment>
    );
  }
}

export default Menu;
