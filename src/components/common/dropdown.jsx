import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    const { labelText, name, data, onChange } = this.props;

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
            <option value={0}>Kérem válasszon a legördülő listából...</option>
            {data.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Dropdown;
