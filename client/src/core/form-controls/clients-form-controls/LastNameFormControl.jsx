import React from "react";

function LastNameFormControl({ formik }) {
  return (
    <div className="form-group">
      <label>Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={formik.handleChange}
        className={
          formik.touched.lastName && Boolean(formik.errors.lastName)
            ? "form-control is-invalid"
            : formik.touched.lastName && !Boolean(formik.errors.lastName)
            ? "form-control is-valid"
            : "form-control"
        }
        value={formik.values.lastName}
        placeholder={"Write here lastName"}
      />
      {formik.touched.lastName && Boolean(formik.errors.lastName) && (
        <small className="error-text">{formik.errors.lastName}</small>
      )}
    </div>
  );
}

export default LastNameFormControl;
