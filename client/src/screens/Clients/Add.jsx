import React from "react";
import Button from "@mui/material/Button";
import { LinkContainer } from "react-router-bootstrap";
import { clientForms } from "../../core/form-controls";
import { useFormik } from "formik";
import { initialClientValues, clientSchema } from "../../core/formik";

function ADD() {
  const formik = useFormik({
    initialValues: initialClientValues,
    validationSchema: clientSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("ADD", values);
    },
  });

  return (
    <div className="container mt-4">
      <h3 className="text-muted text-center">ADD Client</h3>
      <div className="card rounded shadow-sm p-3 mt-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <clientForms.NameFormControl formik={formik} />
            </div>
            <div className="col-md-6">
              <clientForms.LastNameFormControl formik={formik} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <clientForms.CompanyFormControl formik={formik} />
            </div>
            <div className="col-md-6">
              <clientForms.EmailFormControl formik={formik} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <clientForms.AgeFormControl formik={formik} />
            </div>
            <div className="col-md-6">
              <clientForms.TypeClientFormControl formik={formik} />
            </div>
          </div>

          <div className="float-right">
            <LinkContainer to="/clients/list">
              <Button color="secondary" className="mr-2">
                Cancel
              </Button>
            </LinkContainer>

            <Button variant="contained" type={"submit"} color="success">
              ADD Client
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ADD;
