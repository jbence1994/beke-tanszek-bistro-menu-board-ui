import React, { Component } from "react";

import TextInput from "./common/textInput";
import Submit from "./common/submit";

import { createMeal } from "../services/mealService";
import TypesDropdown from "./typesDropdown";

class AddMealForm extends Component {
  state = {
    meal: {
      name: "",
      typeId: 0,
    },
    errorMessage: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { meal } = this.state;
    const { data } = await createMeal(meal);
  };

  handleTextChange = ({ currentTarget: input }) => {
    const meal = { ...this.state.meal };
    meal[input.name] = input.value;
    this.setState({ meal });
  };

  handleNumberChange = ({ currentTarget: input }) => {
    const meal = { ...this.state.meal };
    meal[input.name] = parseInt(input.value);
    this.setState({ meal });
  };

  render() {
    const { meal } = this.state;
    const { name } = meal;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} noValidate>
          <TextInput
            labelText="Étel neve"
            name="name"
            value={name}
            errorMessage="Étel nevének megadása kötelező!"
            onChange={this.handleTextChange}
          />
          <TypesDropdown onChange={this.handleNumberChange} />
          <Submit text="Mentés" />
        </form>
      </React.Fragment>
    );
  }
}

export default AddMealForm;
