import React from "react";

const Dropdown = ({ labelText, name, data, onChange }) => {
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
};

export default Dropdown;
