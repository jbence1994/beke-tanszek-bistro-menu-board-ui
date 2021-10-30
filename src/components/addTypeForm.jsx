import React, { Component } from "react";

import TextInput from "./common/textInput";
import Submit from "./common/submit";

class AddTypeForm extends Component {
  state = {
    typeName: "",
    errorMessage: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { typeName } = this.state;

    console.log("Submitted", typeName); // Call api ...
  };

  handleChange = ({ currentTarget: input }) => {
    const typeName = input.value;

    this.setState({ typeName });
  };

  render() {
    const { typeName } = this.state;

    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="row">
          <div className="col-6">
            <TextInput
              labelText="Kategória neve"
              name="Hello"
              value={typeName}
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
