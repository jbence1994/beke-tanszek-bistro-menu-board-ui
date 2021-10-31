import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TextInput from "./common/textInput";
import Submit from "./common/submit";

import { createType } from "../services/typeService";

class AddTypeForm extends Component {
  state = {
    type: {
      name: "",
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { type } = this.state;
      const { data } = await createType(type);
      const { name } = data;

      toast.success(`${name} kategória sikeresen hozzáadva!`, {
        position: "top-left",
      });
    } catch (e) {
      toast.error("Kategória hozzáadása sikertelen!", {
        position: "top-left",
      });
    }
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
      <React.Fragment>
        <h2>Új kategória rögzítése</h2>
        <form noValidate>
          <TextInput
            labelText="Kategória neve"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Submit text="Mentés" onSubmit={this.handleSubmit} />
        </form>
        <ToastContainer autoClose={3000} />
      </React.Fragment>
    );
  }
}

export default AddTypeForm;
