import React from "react";
import { Form } from "react-bootstrap";

function AgeFormControl({ formik }) {
  return (
    <Form.Group>
      <Form.Label className="float-left text-capitalize">Age</Form.Label>
      <Form.Control
        type="number"
        placeholder={`Enter Age`}
        name={"age"}
        value={formik.values.age}
        onChange={formik.handleChange}
        isInvalid={formik.touched.age && Boolean(formik.errors.age)}
        isValid={formik.touched.age && !Boolean(formik.errors.age)}
      />
      {formik.touched.age && Boolean(formik.errors.age) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.age}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default AgeFormControl;
