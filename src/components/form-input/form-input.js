import React from "react";
import "./form-input.scss";

const FormInput = ({ handleChange, label, ...restProp }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...restProp} />
      {label ? (
        <label
          className={`${
            restProp.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
