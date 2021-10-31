import React, { Component } from "react";
import { toast } from "react-toastify";

import MealsDropdown from "./mealsDropdown";
import Button from "./common/button";

import "react-toastify/dist/ReactToastify.css";

import { deleteMeal } from "../services/mealService";

class DeleteMealForm extends Component {
  state = {
    meal: {
      mealId: 0,
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { meal } = this.state;
      const { mealId } = meal;
      const { data } = await deleteMeal(mealId);
      const { name } = data;

      toast.success(`${name} törlése a napi menüből sikeres!`, {
        position: "top-left",
      });
      setInterval(() => window.location.reload(), 1000);
    } catch (e) {
      toast.error("Étel törlése a napi menüből sikertelen!", {
        position: "top-left",
      });
    }
  };

  handleNumberChange = ({ currentTarget: input }) => {
    const meal = { ...this.state.meal };
    meal[input.name] = parseInt(input.value);
    this.setState({ meal });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Étel törlése a napi menüből</h2>
        <form noValidate>
          <MealsDropdown onChange={this.handleNumberChange} />
          <Button
            classes="btn btn-danger"
            onSubmit={this.handleSubmit}
            text="Étel törlése"
          />
        </form>
      </React.Fragment>
    );
  }
}

export default DeleteMealForm;
