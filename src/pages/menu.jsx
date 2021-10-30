import React, { Component } from "react";

import Logo from "../components/logo";
import Contact from "../components/contact";
import MenuBoard from "../components/menuBoard";

import getTypes from "../services/typeService";

class Menu extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    this.setState({ types: getTypes() });
  }

  render() {
    const { types } = this.state;

    return (
      <React.Fragment>
        <Logo />
        <Contact />
        <MenuBoard types={types} />
      </React.Fragment>
    );
  }
}

export default Menu;
