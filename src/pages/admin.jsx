import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

import AddDailyMenuForm from "../components/addDailyMenuForm";
import DeleteDailyMenusForm from "../components/deleteDailyMenusForm";
import AddMealForm from "../components/addMealForm";

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="p-3 text-center">Napi menü összeállítása</h1>
        <div className="row">
          <div className="col-12 mt-5">
            <AddDailyMenuForm />
          </div>
          <div className="col-12 mt-5">
            <AddMealForm />
          </div>
          <div className="col-12 mt-5">
            <DeleteDailyMenusForm />
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default Admin;
