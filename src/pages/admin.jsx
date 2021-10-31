import React, { Component } from "react";

import AddTypeForm from "../components/addTypeForm";
import AddMealForm from "../components/addMealForm";
import DailyMenuForm from "../components/dailyMenuForm";

class Admin extends Component {
  state = {
    pageName: "Admin",
  };

  render() {
    const { pageName } = this.state;

    return (
      <div className="container">
        <h1 className="p-3 text-center">{pageName}</h1>
        <div className="row">
          <div className="col-12 mt-5">
            <DailyMenuForm />
          </div>
          <div className="col-12 mt-5">
            <AddTypeForm />
          </div>
          <div className="col-12 mt-5">
            <AddMealForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
