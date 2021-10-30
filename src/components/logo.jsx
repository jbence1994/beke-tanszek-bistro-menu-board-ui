import React, { Component } from "react";

import logo from "./logo.png";

class Logo extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Béke Tanszék Bistro logó" />
      </header>
    );
  }
}

export default Logo;
