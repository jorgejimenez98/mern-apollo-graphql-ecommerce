import React from "react";

function NameFormControl({ formik }) {
  return (
    <div className="form-group">
      {/* FULL NAME */}
      <label>Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        className={
          formik.touched.name && Boolean(formik.errors.name)
            ? "form-control is-invalid"
            : formik.touched.name && !Boolean(formik.errors.name)
            ? "form-control is-valid"
            : "form-control"
        }
        value={formik.values.name}
        placeholder={"Write here name"}
      />
      {formik.touched.name && Boolean(formik.errors.name) && (
        <small className="error-text">{formik.errors.name}</small>
      )}
    </div>
  );
}

export default NameFormControl;
