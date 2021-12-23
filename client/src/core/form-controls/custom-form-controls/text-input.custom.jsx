import React from "react";
import { useField } from "formik";
import { Form } from "react-bootstrap";

const CustomTextInputComponent = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <Form.Group>
        <Form.Label className="float-left text-capitalize">
          {props.label}
        </Form.Label>
        <Form.Control
          {...field}
          {...props}
          placeholder={`Write here the ${props.name}`}
        />

        {Boolean(meta.touched && meta.error) ? (
          <small className="error-text">{meta.error}</small>
        ) : null}
      </Form.Group>
    </div>
  );
};

export default CustomTextInputComponent;
