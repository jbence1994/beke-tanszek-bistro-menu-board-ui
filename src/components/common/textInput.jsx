import React, { Component } from "react";

class TextInput extends Component {
  render() {
    const { labelText, name, value, onChange } = this.props;
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor={name}>{labelText}</label>
          <input
            type="text"
            className="form-control"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TextInput;
