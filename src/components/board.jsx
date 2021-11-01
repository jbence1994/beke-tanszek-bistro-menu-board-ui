import React, { Component } from "react";

import getCurrentDate from "../services/dateService";
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

    return meals.map(({ id, name, price }) => (
      <React.Fragment>
        <h3 key={id}>
          &#8226; {name} ..... {price}.-
        </h3>
      </React.Fragment>
    ));
  };

  render() {
    const { types } = this.state;

    return (
      <React.Fragment>
        <article className="col-12">
          <h1 className="text-center mt-3 mb-5">
            Napi menü {getCurrentDate()}
          </h1>
        </article>
        {types.map(({ id, name, meals }) => (
          <article className="text-center p-2 col-3" key={id}>
            <h2>{name}</h2>
            {this.renderMeals(meals)}
          </article>
        ))}
      </React.Fragment>
    );
  }
}

export default MenuBoard;
