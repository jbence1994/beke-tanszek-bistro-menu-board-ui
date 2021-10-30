import React, { Component } from "react";

class Submit extends Component {
  render() {
    const { text } = this.props;

    return <button className="btn btn-info">{text}</button>;
  }
}

export default Submit;
