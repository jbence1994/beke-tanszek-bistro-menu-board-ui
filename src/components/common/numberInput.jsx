import React, { Component } from "react";

class NumberInput extends Component {
  render() {
    const { labelText, name, value, onChange } = this.props;

    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor={name}>{labelText}</label>
          <input
            type="number"
            className="form-control"
            min={0}
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

export default NumberInput;
