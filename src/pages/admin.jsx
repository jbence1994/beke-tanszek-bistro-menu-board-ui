import React, { Component } from "react";

class Admin extends Component {
  state = {
    pageName: "Admin felület",
  };

  render() {
    const { pageName } = this.state;

    return (
      <React.Fragment>
        <h1 className="text-center">{pageName}</h1>
      </React.Fragment>
    );
  }
}

export default Admin;
