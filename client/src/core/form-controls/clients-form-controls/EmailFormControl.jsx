import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import { Delete } from "@mui/icons-material";

function EmailFormControl(props) {
  return (
    <Form.Group className="mb-4 mt-4">
      <Form.Label className="float-left mt-1">
        Email #{props.index + 1}
      </Form.Label>
      <Row>
        <Col md={11} sm={10}>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name={props.name}
            value={props.values}
            onChange={props.handleChange}
            isInvalid={props.touched && Boolean(props.errors)}
            isValid={props.touched && !Boolean(props.errors)}
            onBlur={props.handleBlur}
          />

          {props.touched && Boolean(props.errors) && (
            <Form.Control.Feedback type="invalid">
              <span className="float-left">{props.errors}</span>
            </Form.Control.Feedback>
          )}
        </Col>
        <Col md={1} sm={2}>
          {/* DELETE */}
          <Tooltip
            title={`Delete Email`}
            placement="bottom"
            aria-label="delete"
            TransitionComponent={Zoom}
          >
            <IconButton onClick={() => props.remove(props.index)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Col>
      </Row>
    </Form.Group>
  );
}

export default EmailFormControl;
