import React from "react";

function LastNameFormControl({ values, handleChange, errors, touched }) {
  return (
    <div className="form-group">
      <label>Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        onChange={handleChange}
        className={
          touched.lastname && Boolean(errors.lastname)
            ? "form-control is-invalid"
            : touched.lastname && !Boolean(errors.lastname)
            ? "form-control is-valid"
            : "form-control"
        }
        value={values.lastname}
        placeholder={"Write here lastName"}
      />
      {touched.lastname && Boolean(errors.lastname) && (
        <small className="error-text">{errors.lastname}</small>
      )}
    </div>
  );
}

export default LastNameFormControl;
