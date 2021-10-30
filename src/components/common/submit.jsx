import React, { Component } from "react";

class Submit extends Component {
  render() {
    const { text, onSubmit } = this.props;

    return (
      <button className="btn btn-info" onClick={onSubmit}>
        {text}
      </button>
    );
  }
}

export default Submit;
