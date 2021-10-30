import React, { Component } from "react";

import "./menu.css";

class Menu extends Component {
  state = {
    types: [
      { id: 1, name: "Levesek" },
      { id: 2, name: "Főételek" },
      { id: 3, name: "Vegetáriánus" },
      { id: 4, name: "Frissensültek" },
      { id: 5, name: "Tészták" },
      { id: 6, name: "Köretek" },
      { id: 7, name: "Desszertek" },
      { id: 8, name: "Saláták" },
    ],
  };

  render() {
    const { types } = this.state;

    return (
      <section>
        {types.map(({ id, name }) => (
          <h1 key={id}>{name}</h1>
        ))}
      </section>
    );
  }
}

export default Menu;
