import React, { Component } from "react";

import TextInput from "./common/textInput";
import Submit from "./common/submit";

import { createType } from "../services/typeService";

class AddTypeForm extends Component {
  state = {
    type: {
      name: "",
    },
    errorMessage: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { type } = this.state;
    const { data } = await createType(type);
  };

  handleChange = ({ currentTarget: input }) => {
    const type = { ...this.state.type };
    type[input.name] = input.value;
    this.setState({ type });
  };

  render() {
    const { type } = this.state;
    const { name } = type;

    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="row">
          <div className="col-6">
            <TextInput
              labelText="Kategória neve"
              name="name"
              value={name}
              errorMessage="Kategória nevének megadása kötelező!"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Submit text="Mentés" />
          </div>
        </div>
      </form>
    );
  }
}

export default AddTypeForm;