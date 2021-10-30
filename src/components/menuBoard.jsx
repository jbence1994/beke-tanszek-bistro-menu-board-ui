import React, { Component } from "react";

import getTypes from "../services/typeService";

class MenuBoard extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    this.setState({ types: getTypes() });
  }

  render() {
    const { types } = this.state;

    return (
      <section>
        {types.map(({ id, name, meals }) => (
          <article key={id}>
            <h1>{name}</h1>
            {meals.map(({ id, name }) => (
              <h2 key={id}>{name}</h2>
            ))}
          </article>
        ))}
      </section>
    );
  }
}

export default MenuBoard;
