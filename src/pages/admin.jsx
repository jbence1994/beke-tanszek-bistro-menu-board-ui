import React, { Component } from "react";

import AddTypeForm from "../components/addTypeForm";

class Admin extends Component {
  state = {
    pageName: "Admin felület",
  };

  render() {
    const { pageName } = this.state;

    return (
      <React.Fragment>
        <h1 className="p-3 text-center">{pageName}</h1>
        <AddTypeForm />
      </React.Fragment>
    );
  }
}

export default Admin;
