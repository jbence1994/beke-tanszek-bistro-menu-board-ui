import React, { Component } from "react";

class MenuBoard extends Component {
  render() {
    const { types } = this.props;

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
