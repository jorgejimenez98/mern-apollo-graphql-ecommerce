import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import { clientForms } from "../../core/form-controls";
import { Loader, Message } from "../../components";
import { CLIENT_DETAILS } from "../../graphql/queries";
import { UPDATE_CLIENT } from "../../graphql/mutations";
import { clientSchema } from "../../core/formik";

const initialClientValues = {
  name: "",
  lastname: "",
  company: "",
  emails: [
    {
      email: "",
    },
  ],
  age: "",
  type: "BASIC",
};

const Edit = ({ history, match }) => {
  // Client ID
  const clientId = match.params.clientId;

  // Get Client Details
  const { data, error, loading } = useQuery(CLIENT_DETAILS, {
    variables: { getClientId: clientId },
  });

  // Init Update Client Mutation
  const [
    updateClient,
    { data: dataUpdate, error: errorUpdate, loading: loadingUpdate },
  ] = useMutation(UPDATE_CLIENT);

  // Init Client Values
  initialClientValues.name = data?.getClient.name;
  initialClientValues.lastname = data?.getClient.lastname;
  initialClientValues.company = data?.getClient.company;
  initialClientValues.emails = data?.getClient.emails;
  initialClientValues.age = data?.getClient.age;
  initialClientValues.type = data?.getClient.type;

  useEffect(() => {
    if (dataUpdate) {
      history.push("/clients/list");
    }
  }, [dataUpdate, history]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" text={error.message} />
      ) : (
        data && (
          <Formik
            initialValues={initialClientValues}
            validationSchema={clientSchema}
            onSubmit={(values) => {
              const input = {
                id: clientId,
                name: values.name,
                lastname: values.lastname,
                age: values.age,
                company: values.company,
                type: values.type,
                emails: values.emails,
              };
              updateClient({
                variables: { input },
                refetchQueries: [
                  {
                    query: CLIENT_DETAILS,
                    variables: { getClientId: clientId },
                  },
                ],
              });
            }}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              isValid,
            }) => (
              <Form noValidate autoComplete="off">
                <div className="container mt-4">
                  <h3 className="text-muted text-center">
                    Edit Client <strong>{data?.getClient.name}</strong>
                  </h3>

                  {errorUpdate && (
                    <Message type={"error"} text={errorUpdate.message} />
                  )}

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
                      {loadingUpdate && <Loader />}
                      <LinkContainer to="/clients/list">
                        <Button color="secondary" className="mr-2">
                          Cancel
                        </Button>
                      </LinkContainer>

                      <Button
                        variant="contained"
                        type={"submit"}
                        disabled={!isValid || values?.emails?.length === 0}
                        color="success"
                      >
                        EDIT Client
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )
      )}
    </React.Fragment>
  );
};

export default Edit;
