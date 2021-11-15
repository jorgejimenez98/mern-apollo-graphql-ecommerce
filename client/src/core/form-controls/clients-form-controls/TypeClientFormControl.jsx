import React from "react";
import Form from "react-bootstrap/Form";

function TypeClientFormControl({ values, handleChange, errors, touched }) {
  return (
    <Form.Group>
      <Form.Label className="float-left">Type Of Client</Form.Label>

      <select
        className="form-control"
        name="category"
        value={values.type}
        onChange={handleChange}
      >
        <option value="BASIC">Basic</option>
        <option value="PREMIUM">Premium</option>
      </select>

      {touched.type && Boolean(errors.type) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{errors.type}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default TypeClientFormControl;
