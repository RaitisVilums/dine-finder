import React from "react";
import "./input.styles.scss";

const Input = ({ label, name, type, value, onChange, readOnly, className }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={!readOnly}
        className={`form-control ${className}`}
      />
    </div>
  );
};

export default Input;
