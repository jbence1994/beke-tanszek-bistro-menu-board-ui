import React, { Component } from "react";

import Header from "../components/header";
import Board from "../components/board";
import Footer from "../components/footer";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="row">
          <Header />
        </section>
        <section className="row">
          <Board />
        </section>
        <section className="row fixed-bottom">
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}

export default Menu;
