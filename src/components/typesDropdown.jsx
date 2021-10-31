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

  render() {
    const { types } = this.state;
    const { onChange } = this.props;

    return (
      <Dropdown
        labelText="Kategóriák"
        name="typeId"
        data={types}
        onChange={onChange}
      />
    );
  }
}

export default TypesDropdown;
