import React, { Component } from "react";

import MenuBoard from "../components/menuBoard";
import Footer from "../components/footer";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="row">
          <MenuBoard />
        </section>
        <section className="row fixed-bottom">
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}

export default Menu;
