import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { CustomTextInputComponent } from "../../../core/form-controls";
import { Loader, Message } from "../../../components";
import { UPDATE_PRODUCT } from "../../../graphql/mutations";
import { GET_PRODUCT_DETAILS } from "../../../graphql/queries";
import { productSchema } from "../../../core/formik";

const initialProductValues = {
  name: "",
  price: "",
  stock: "",
};

const EditProduct = ({ history, match }) => {
  const productId = match.params.productId;

  /* GET product details query */
  const { data, error, loading } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { productId: productId },
  });

  /* INIT update product mutation */
  const [
    UpdateProduct,
    { data: dataUpdate, error: errorUpdate, loading: loadingUpdate },
  ] = useMutation(UPDATE_PRODUCT);

  useEffect(() => {
    if (dataUpdate) {
      console.log("Product Updated");
      history.push("/products/list");
    }
  }, [dataUpdate, history]);

  /* INIT form values */
  initialProductValues.name = data?.getProduct.name;
  initialProductValues.price = data?.getProduct.price;
  initialProductValues.stock = data?.getProduct.stock;

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type={"error"} text={error} />
      ) : (
        data?.getProduct && (
          <Formik
            initialValues={initialProductValues}
            validationSchema={productSchema}
            onSubmit={(values) => {
              const input = {
                id: productId,
                ...values,
              };
              UpdateProduct({
                variables: { input },
                refetchQueries: [
                  {
                    query: GET_PRODUCT_DETAILS,
                    variables: { productId },
                  },
                ],
              });
            }}
          >
            {() => (
              <Form noValidate autoComplete="off">
                <div className="container mt-4">
                  {errorUpdate && (
                    <Message type={"error"} text={errorUpdate.message} />
                  )}

                  <div className="card rounded shadow-sm p-3 mt-4">
                    <div className="card-header">
                      <h3 className="text-muted text-center">Edit Product</h3>
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
                      {loadingUpdate && <Loader />}
                      <LinkContainer to="/products/list">
                        <Button color="secondary" className="mr-2">
                          Cancel
                        </Button>
                      </LinkContainer>

                      <Button
                        variant="contained"
                        type={"submit"}
                        color="success"
                      >
                        Edit Product
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

export default EditProduct;
