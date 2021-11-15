import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { clientForms } from "../../core/form-controls";
import { Loader, Message } from "../../components";
import { CREATE_CLIENT } from "../../graphql/mutations";
import { clientSchema, initialClientValues } from "../../core/formik";

const Add = ({ history }) => {
  const [createClient, { data, error, loading }] = useMutation(CREATE_CLIENT);

  console.log(data);
  
  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data, history]);

  return (
    <React.Fragment>
      <Formik
        initialValues={initialClientValues}
        validationSchema={clientSchema}
        onSubmit={(input) => {
          createClient({ variables: { input } });
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
          <Form noValidate autoComplete="off">
            <div className="container mt-4">
              <h3 className="text-muted text-center">ADD Client</h3>

              {error && <Message type={"error"} text={error.message} />}

              <div className="card rounded shadow-sm p-3 mt-4">
                <div className="row">
                  <div className="col-md-6">
                    {/* NAME */}
                    <clientForms.NameFormControl
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    {/* LAST NAME */}
                    <clientForms.LastNameFormControl
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    {/* COMPANY */}
                    <clientForms.CompanyFormControl
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    {/* AGE */}
                    <clientForms.AgeFormControl
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    {/* EMAILS */}
                    <clientForms.EmailsFormControl
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {/* TYPE OF CLIENT */}
                    <clientForms.TypeClientFormControl
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </div>
                </div>

                <div className="text-right">
                  {loading && <Loader />}
                  <LinkContainer to="/clients/list">
                    <Button color="secondary" className="mr-2">
                      Cancel
                    </Button>
                  </LinkContainer>

                  <Button
                    variant="contained"
                    type={"submit"}
                    disabled={!isValid || values.emails.length === 0}
                    color="success"
                  >
                    ADD Client
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Add;
