import React, { Component } from "react";

import getCurrentDate from "../services/dateService";
import { getCategoriesWithMeals } from "../services/categoryService";

class MenuBoard extends Component {
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
      <React.Fragment>
        <h3 key={id}>
          &#8226; {name} ..... {price}.-
        </h3>
      </React.Fragment>
    ));
  };

  render() {
    const { categories } = this.state;

    return (
      <React.Fragment>
        <article className="col-12">
          <h1 className="text-center mt-5 mb-5">
            Napi menü {getCurrentDate()}
          </h1>
        </article>
        {categories.map(({ id, name, meals }) => (
          <article className="text-center p-3 col-3" key={id}>
            <h2>{name}</h2>
            {this.renderMeals(meals)}
          </article>
        ))}
      </React.Fragment>
    );
  }
}

export default MenuBoard;
