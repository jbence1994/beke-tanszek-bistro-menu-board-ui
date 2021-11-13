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
        <section className="row">
          <article className="col-12 mt-5">
            <AddMealForm />
          </article>
          <article className="col-12 mt-5">
            <DeleteMealForm />
          </article>
          <article className="col-12 mt-5">
            <DeleteMealsForm />
          </article>
        </section>
        <ToastContainer autoClose={1000} />
      </div>
    );
  }
}

export default Admin;
