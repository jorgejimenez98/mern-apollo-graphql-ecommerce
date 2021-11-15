import React from "react";

function LastNameFormControl({ values, handleChange, errors, touched }) {
  return (
    <div className="form-group">
      <label>Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        className={
          touched.lastName && Boolean(errors.lastName)
            ? "form-control is-invalid"
            : touched.lastName && !Boolean(errors.lastName)
            ? "form-control is-valid"
            : "form-control"
        }
        value={values.lastName}
        placeholder={"Write here lastName"}
      />
      {touched.lastName && Boolean(errors.lastName) && (
        <small className="error-text">{errors.lastName}</small>
      )}
    </div>
  );
}

export default LastNameFormControl;
