import React from "react";
import Form from "react-bootstrap/Form";

function TypeClientFormControl({ formik }) {
  return (
    <Form.Group>
      <Form.Label className="float-left">Type Of Client</Form.Label>

      <select
        className="form-control"
        name="category"
        value={formik.values.typeOfClient}
        onChange={formik.handleChange}
      >
        <option value="BASIC">Basic</option>
        <option value="PREMIUM">Premium</option>
      </select>

      {formik.touched.typeOfClient && Boolean(formik.errors.typeOfClient) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.typeOfClient}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default TypeClientFormControl;
