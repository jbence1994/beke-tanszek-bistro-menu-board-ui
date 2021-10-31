import React, { Component } from "react";

class DeleteButton extends Component {
  render() {
    const { text, onClick } = this.props;

    return (
      <button className="btn btn-danger" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default DeleteButton;
