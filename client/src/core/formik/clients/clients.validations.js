import * as yup from "yup";

export const initialClientValues = {
  name: "",
  lastName: "",
  company: "",
  email: "",
  age: "",
  typeOfClient: "BASIC",
};

export const clientSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  lastName: yup.string().trim().required("Last Name is required"),
  company: yup.string().trim().required("Company is required"),
  email: yup
    .string()
    .trim()
    .email("Write a valid email. Ex: name@email.com")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Age must be positive")
    .required("Age is required"),

  typeOfClient: yup.string().trim().required("Type Of Client is required"),
});
