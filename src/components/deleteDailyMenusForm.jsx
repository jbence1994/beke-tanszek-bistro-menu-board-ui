import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DeleteButton from "./common/deleteButton";

import { deleteDailyMenus } from "../services/dailyMenusService";

class DeleteDailyMenusForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = deleteDailyMenus();
      toast.success(`Sikeresen törölte a napi menüt!`, {
        position: "top-left",
      });
    } catch (e) {
      toast.error("Napi menü törlése sikertelen!", {
        position: "top-left",
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form noValidate>
          <DeleteButton text="Napi menü törlése" onSubmit={this.handleSubmit} />
        </form>
        <ToastContainer autoClose={3000} />
      </React.Fragment>
    );
  }
}

export default DeleteDailyMenusForm;
