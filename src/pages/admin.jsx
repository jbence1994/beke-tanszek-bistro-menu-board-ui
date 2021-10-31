import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

import AddMealForm from "../components/addMealForm";
import DeleteMealForm from "../components/deleteMealForm";
import DeleteMealsForm from "../components/deleteMealsForm";

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="p-3 text-center">Napi menü összeállítása</h1>
        <div className="row">
          <div className="col-12 mt-5">
            <AddMealForm />
          </div>
          <div className="col-12 mt-5">
            <DeleteMealForm />
          </div>
          <div className="col-12 mt-5">
            <DeleteMealsForm />
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default Admin;
