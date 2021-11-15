import React from "react";
import { Form } from "react-bootstrap";

function AgeFormControl({ values, handleChange, touched, errors }) {
  return (
    <Form.Group>
      <Form.Label className="float-left text-capitalize">Age</Form.Label>
      <Form.Control
        type="number"
        placeholder={`Enter Age`}
        name={"age"}
        value={values.age}
        onChange={handleChange}
        isInvalid={touched.age && Boolean(errors.age)}
        isValid={touched.age && !Boolean(errors.age)}
      />
      {touched.age && Boolean(errors.age) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{errors.age}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default AgeFormControl;
