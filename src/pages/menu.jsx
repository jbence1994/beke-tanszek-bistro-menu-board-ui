import React from "react";

import Board from "../components/board";
import Footer from "../components/footer";

const Menu = () => {
  return (
    <React.Fragment>
      <section className="row">
        <Board />
      </section>
      <section className="row fixed-bottom">
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default Menu;
