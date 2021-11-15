import React from "react";

function NameFormControl({ values, handleChange, errors, touched }) {
  return (
    <div className="form-group">
      {/* FULL NAME */}
      <label>Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        className={
          touched.name && Boolean(errors.name)
            ? "form-control is-invalid"
            : touched.name && !Boolean(errors.name)
            ? "form-control is-valid"
            : "form-control"
        }
        value={values.name}
        placeholder={"Write here name"}
      />
      {touched.name && Boolean(errors.name) && (
        <small className="error-text">{errors.name}</small>
      )}
    </div>
  );
}

export default NameFormControl;
