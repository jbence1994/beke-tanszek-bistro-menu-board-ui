import React, { Component } from "react";

import logo from "./logo.png";

class Logo extends Component {
  render() {
    return (
      <img
        className="mx-auto d-block"
        src={logo}
        alt="Béke Tanszék Bistro logó"
      />
    );
  }
}

export default Logo;
