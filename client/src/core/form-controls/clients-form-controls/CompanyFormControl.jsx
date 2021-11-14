import React from "react";

function CompanyFormControl({ formik }) {
  return (
    <div className="form-group">
      {/* FULL NAME */}
      <label>Company</label>
      <input
        type="text"
        id="company"
        name="company"
        onChange={formik.handleChange}
        className={
          formik.touched.company && Boolean(formik.errors.company)
            ? "form-control is-invalid"
            : formik.touched.company && !Boolean(formik.errors.company)
            ? "form-control is-valid"
            : "form-control"
        }
        value={formik.values.company}
        placeholder={"Write here company"}
      />
      {formik.touched.company && Boolean(formik.errors.company) && (
        <small className="error-text">{formik.errors.company}</small>
      )}
    </div>
  );
}

export default CompanyFormControl;
