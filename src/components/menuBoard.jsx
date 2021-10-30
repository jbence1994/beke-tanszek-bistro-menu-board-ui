import React, { Component } from "react";

import { getTypesWithMeals } from "../services/typeService";

class MenuBoard extends Component {
  state = {
    types: [],
  };

  async componentDidMount() {
    const { data } = await getTypesWithMeals();
    this.setState({ types: data });
  }

  renderMeals = (meals) => {
    if (!meals) {
      return;
    }

    return meals.map(({ id, name }) => <h2 key={id}>{name}</h2>);
  };

  render() {
    const { types } = this.state;

    return (
      <section className="mt-5 row text-center">
        {types.map(({ id, name, meals }) => (
          <article className="col-2 m-3" key={id}>
            <h1>{name}</h1>
            {this.renderMeals(meals)}
          </article>
        ))}
      </section>
    );
  }
}

export default MenuBoard;
