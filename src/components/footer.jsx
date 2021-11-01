import React, { Component } from "react";

import Logo from "./logo";
import Contact from "./contact";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <article className="col-6">
          <Logo />
        </article>
        <article className="col-6">
          <Contact />
        </article>
      </React.Fragment>
    );
  }
}

export default Footer;
