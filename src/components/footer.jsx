import React from "react";

import Logo from "./logo";
import Contact from "./contact";

const Footer = () => {
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
};

export default Footer;
