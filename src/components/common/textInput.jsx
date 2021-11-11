import React from "react";

const TextInput = ({ labelText, name, value, onChange }) => {
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
};

export default TextInput;
