import React, { Component } from "react";

class DeleteButton extends Component {
  render() {
    const { text, onSubmit } = this.props;

    return (
      <button className="btn btn-danger" onClick={onSubmit}>
        {text}
      </button>
    );
  }
}

export default DeleteButton;
