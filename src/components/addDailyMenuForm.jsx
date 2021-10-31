import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MealsDropdown from "./mealsDropdown";
import Button from "./common/button";

import { createDailyMenu } from "../services/dailyMenusService";

class AddDailyMenuForm extends Component {
  state = {
    dailyMenu: {
      mealId: 0,
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { dailyMenu } = this.state;
      const { data } = await createDailyMenu(dailyMenu);

      const { meal } = data;
      const { name: mealName } = meal;

      toast.success(`${mealName} sikeresen hozzáadva a napi menühöz!`, {
        position: "top-left",
      });
    } catch (e) {
      toast.error("Étel hozzáadása a napi menühöz sikertelen!", {
        position: "top-left",
      });
    }
  };

  handleNumberChange = ({ currentTarget: input }) => {
    const dailyMenu = { ...this.state.dailyMenu };
    dailyMenu[input.name] = parseInt(input.value);
    this.setState({ dailyMenu });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Étel rögzítése a napi menübe</h2>
        <form noValidate>
          <MealsDropdown onChange={this.handleNumberChange} />
          <Button
            classes="btn btn-info"
            onSubmit={this.handleSubmit}
            text="Mentés"
          />
        </form>
        <ToastContainer autoClose={2000} />
      </React.Fragment>
    );
  }
}

export default AddDailyMenuForm;
