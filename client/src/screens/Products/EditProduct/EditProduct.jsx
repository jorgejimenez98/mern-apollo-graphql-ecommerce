import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { CustomTextInputComponent } from "../../../core/form-controls";
import { Loader, Message } from "../../../components";
import { CREATE_PRODUCT } from "../../../graphql/mutations";
import { productSchema, initialProductValues } from "../../../core/formik";

const EditProduct = ({ history, match }) => {
  const productId = match.params.productId;
  const [CreateProduct, { data, error, loading }] = useMutation(CREATE_PRODUCT);

  console.log(productId);

  useEffect(() => {
    if (data) {
      history.push("/products/list");
    }
  }, [data, history]);

  return (
    <React.Fragment>
      <Formik
        initialValues={initialProductValues}
        validationSchema={productSchema}
        onSubmit={(input) => {
          CreateProduct({ variables: { input } });
        }}
      >
        {() => (
          <Form noValidate autoComplete="off">
            <div className="container mt-4">
              {error && <Message type={"error"} text={error.message} />}

              <div className="card rounded shadow-sm p-3 mt-4">
                <div className="card-header">
                  <h3 className="text-muted text-center">ADD Product</h3>
                </div>
                <CustomTextInputComponent
                  label="Name"
                  name="name"
                  type="text"
                />

                <CustomTextInputComponent
                  label="Price"
                  name="price"
                  type="number"
                />

                <CustomTextInputComponent
                  label="Stock"
                  name="stock"
                  type="number"
                />

                <div className="text-right">
                  {loading && <Loader />}
                  <LinkContainer to="/products/list">
                    <Button color="secondary" className="mr-2">
                      Cancel
                    </Button>
                  </LinkContainer>

                  <Button variant="contained" type={"submit"} color="success">
                    ADD Product
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

export default EditProduct;
