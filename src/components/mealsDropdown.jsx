import React, { Component } from "react";

import Dropdown from "./common/dropdown";

import { getMeals } from "../services/mealService";

class MealsDropdown extends Component {
  state = {
    meals: [],
  };

  async componentDidMount() {
    const { data } = await getMeals();
    this.setState({ meals: data });
  }

  render() {
    const { meals } = this.state;
    const { onChange } = this.props;

    return (
      <Dropdown
        labelText="Ételek"
        name="mealId"
        data={meals}
        onChange={onChange}
      />
    );
  }
}

export default MealsDropdown;
