import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MealsDropdown from "./mealsDropdown";
import Submit from "./common/submit";

import { createDailyMenu } from "../services/dailyMenusService";

class DailyMenuForm extends Component {
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
        <h2>Napi menü összeállítása</h2>
        <form noValidate>
          <MealsDropdown onChange={this.handleNumberChange} />
          <Submit text="Mentés" onSubmit={this.handleSubmit} />
        </form>
        <ToastContainer autoClose={3000} />
      </React.Fragment>
    );
  }
}

export default DailyMenuForm;
