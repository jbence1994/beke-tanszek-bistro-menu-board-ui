import React, { Component } from "react";

import logo from "./logo.png";

class Logo extends Component {
  render() {
    return (
      <img className="img-fluid" src={logo} alt="Béke Tanszék Bistro logó" />
    );
  }
}

export default Logo;
