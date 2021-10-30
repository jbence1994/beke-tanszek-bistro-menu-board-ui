import React, { Component } from "react";

import Dropdown from "./common/dropdown";

import { getTypes } from "../services/typeService";

class TypesDropdown extends Component {
  state = {
    types: [],
  };

  async componentDidMount() {
    const { data } = await getTypes();
    this.setState({ types: data });
  }

  handleChange = () => {
    console.log("Changed...");
  };

  render() {
    const { types } = this.state;

    return (
      <Dropdown
        labelText="Kategóriák"
        name="types"
        errorMessage="Kategória megadása kötelező!"
        data={types}
        onChange={this.handleChange}
      />
    );
  }
}

export default TypesDropdown;
