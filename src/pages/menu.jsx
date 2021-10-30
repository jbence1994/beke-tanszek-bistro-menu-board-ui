import React, { Component } from "react";

import Board from "../components/board";
import Logo from "../components/logo";

class Menu extends Component {
  state = {
    types: [
      {
        id: 1,
        name: "Levesek",
        meals: [
          { id: 1, name: "Meal #1" },
          { id: 2, name: "Meal #2" },
        ],
      },

      {
        id: 2,
        name: "Főételek",
        meals: [
          { id: 1, name: "Meal #1" },
          { id: 2, name: "Meal #2" },
        ],
      },
      {
        id: 3,
        name: "Vegetáriánus",
        meals: [
          { id: 1, name: "Meal #1" },
          { id: 2, name: "Meal #2" },
        ],
      },
      {
        id: 4,
        name: "Frissensültek",
        meals: [
          { id: 1, name: "Meal #1" },
          { id: 2, name: "Meal #2" },
        ],
      },
      {
        id: 5,
        name: "Tészták",
        meals: [
          { id: 1, name: "Meal #1" },
          { id: 2, name: "Meal #2" },
        ],
      },
      {
        id: 6,
        name: "Köretek",
        meals: [
          { id: 1, name: "Meal #1" },
          { id: 2, name: "Meal #2" },
        ],
      },
      {
        id: 7,
        name: "Desszertek",
        meals: [
          { id: 1, name: "Meal #1" },
          { id: 2, name: "Meal #2" },
        ],
      },
      {
        id: 8,
        name: "Saláták",
        meals: [
          { id: 1, name: "Meal #1" },
          { id: 2, name: "Meal #2" },
        ],
      },
    ],
  };

  render() {
    const { types } = this.state;

    return (
      <React.Fragment>
        <Logo />
        <Board types={types} />
      </React.Fragment>
    );
  }
}

export default Menu;
