import * as yup from "yup";

export const initialProductValues = {
  name: "",
  price: "",
  stock: "",
};

export const productSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  price: yup
    .number()
    .positive("Price must be positive")
    .required("Price is required"),
  stock: yup
    .number()
    .positive("Stock must be positive")
    .required("Stock is required"),
});
