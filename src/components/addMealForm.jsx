import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { meal } = this.state;
      const { data } = await createMeal(meal);

      const { name: mealName } = data;

      const { type } = data;
      const { name: typeName } = type;

      toast.success(
        `${mealName} sikeresen hozzáadva a ${typeName} kategóriához!`,
        {
          position: "top-left",
        }
      );
    } catch (e) {
      toast.error("Étel hozzáadása sikertelen!", {
        position: "top-left",
      });
    }
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
        <form noValidate>
          <TextInput
            labelText="Étel neve"
            name="name"
            value={name}
            onChange={this.handleTextChange}
          />
          <TypesDropdown onChange={this.handleNumberChange} />
          <Submit text="Mentés" onSubmit={this.handleSubmit} />
        </form>
        <ToastContainer autoClose={3000} />
      </React.Fragment>
    );
  }
}

export default AddMealForm;
