import React, { Component } from "react";

class Dropdown extends Component {
  state = {};

  render() {
    const { labelText, name, errorMessage, data, onChange } = this.props;

    return (
      <React.Fragment>
        <div className="form-group">
          <label>{labelText}</label>
          <select
            className="form-control"
            id={name}
            name={name}
            onChange={onChange}
          >
            <option value={0}></option>
            {data.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {errorMessage && (
          <div className="alert alert-warning">{errorMessage}</div>
        )}
      </React.Fragment>
    );
  }
}

export default Dropdown;
