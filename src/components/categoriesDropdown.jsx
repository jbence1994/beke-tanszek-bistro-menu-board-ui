import React, { Component } from "react";

import Dropdown from "./common/dropdown";

import { getCategories } from "../services/categoryService";

class CategoriesDropdown extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const { data } = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    const { onChange } = this.props;

    return (
      <Dropdown
        labelText="Kategóriák"
        name="categoryId"
        data={categories}
        onChange={onChange}
      />
    );
  }
}

export default CategoriesDropdown;
