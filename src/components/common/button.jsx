import React from "react";

const Button = ({ classes, onSubmit, text }) => {
  return (
    <button className={classes} onClick={onSubmit}>
      {text}
    </button>
  );
};

export default Button;
