import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./common/button";

import { deleteDailyMenus } from "../services/dailyMenusService";

class DeleteDailyMenusForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    try {
      deleteDailyMenus();
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
          <Button
            classes="btn btn-danger"
            onSubmit={this.handleSubmit}
            text="Teljes napi menü törlése"
          />
        </form>
        <ToastContainer autoClose={2000} />
      </React.Fragment>
    );
  }
}

export default DeleteDailyMenusForm;
