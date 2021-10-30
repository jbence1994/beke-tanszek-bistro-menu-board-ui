import React, { Component } from "react";

import getTypes from "../services/fakeTypeService";

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
      <section className="mt-5 row text-center">
        {types.map(({ id, name, meals }) => (
          <article className="col-2 m-3" key={id}>
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
