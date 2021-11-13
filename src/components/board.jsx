import React, { Component } from "react";

import { getCategoriesWithMeals } from "../services/categoryService";

class Board extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const { data } = await getCategoriesWithMeals();
    this.setState({ categories: data });
  }

  renderMeals = (meals) => {
    if (!meals) {
      return;
    }

    return meals.map(({ id, name, price }) => (
      <h1 key={id}>
        &#8226; {name} ..... {price}.-
      </h1>
    ));
  };

  render() {
    const { categories } = this.state;

    return (
      <React.Fragment>
        {categories.map(({ id, name, meals }) => (
          <article className="text-center p-3 col-3" key={id}>
            <h1>{name}</h1>
            {this.renderMeals(meals)}
          </article>
        ))}
      </React.Fragment>
    );
  }
}

export default Board;
