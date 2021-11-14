import React from "react";

function EmailFormControl({ formik }) {
  return (
    <div className="form-group">
      {/* EMAIL */}
      <label>Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        className={
          formik.touched.email && Boolean(formik.errors.email)
            ? "form-control is-invalid"
            : formik.touched.email && !Boolean(formik.errors.email)
            ? "form-control is-valid"
            : "form-control"
        }
        placeholder={"Write here Email"}
      />
      {formik.touched.email && Boolean(formik.errors.email) && (
        <small className="error-text">{formik.errors.email}</small>
      )}
    </div>
  );
}

export default EmailFormControl;
