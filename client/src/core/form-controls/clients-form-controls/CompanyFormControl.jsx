import React from "react";

function CompanyFormControl({ values, handleChange, errors, touched }) {
  return (
    <div className="form-group">
      {/* FULL NAME */}
      <label>Company</label>
      <input
        type="text"
        id="company"
        name="company"
        onChange={handleChange}
        className={
          touched.company && Boolean(errors.company)
            ? "form-control is-invalid"
            : touched.company && !Boolean(errors.company)
            ? "form-control is-valid"
            : "form-control"
        }
        value={values.company}
        placeholder={"Write here company"}
      />
      {touched.company && Boolean(errors.company) && (
        <small className="error-text">{errors.company}</small>
      )}
    </div>
  );
}

export default CompanyFormControl;
