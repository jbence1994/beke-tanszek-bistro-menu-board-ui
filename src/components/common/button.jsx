import React, { Component } from "react";

class Button extends Component {
  render() {
    const { classes, onSubmit, text } = this.props;

    return (
      <button className={classes} onClick={onSubmit}>
        {text}
      </button>
    );
  }
}

export default Button;
