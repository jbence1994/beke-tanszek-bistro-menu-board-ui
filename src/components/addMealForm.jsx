import React, { Component } from "react";
import { toast } from "react-toastify";

import TextInput from "./common/textInput";
import NumberInput from "./common/numberInput";
import Button from "./common/button";
import TypesDropdown from "./typesDropdown";

import "react-toastify/dist/ReactToastify.css";

import { createMeal } from "../services/mealService";

class AddMealForm extends Component {
  state = {
    meal: {
      name: "",
      price: 0,
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
        `${mealName} sikeresen hozzáadva a ${typeName} kategóriában a napi menühöz!`,
        {
          position: "top-left",
        }
      );
      setInterval(() => window.location.reload(), 1000);
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
    const { name, price } = meal;

    return (
      <React.Fragment>
        <h2>Új étel rögzítése a napi menübe</h2>
        <form noValidate>
          <TextInput
            labelText="Étel neve"
            name="name"
            value={name}
            onChange={this.handleTextChange}
          />
          <NumberInput
            labelText="Étel ára"
            name="price"
            value={price}
            onChange={this.handleNumberChange}
          />
          <TypesDropdown onChange={this.handleNumberChange} />
          <Button
            classes="btn btn-info"
            onSubmit={this.handleSubmit}
            text="Étel rögzítése"
          />
        </form>
      </React.Fragment>
    );
  }
}

export default AddMealForm;
