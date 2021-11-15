import * as yup from "yup";

export const initialClientValues = {
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

export const clientSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  lastname: yup.string().trim().required("Last Name is required"),
  company: yup.string().trim().required("Company is required"),
  age: yup
    .number()
    .positive("Age must be positive")
    .required("Age is required"),
  type: yup.string().trim().required("Type Of Client is required"),
  emails: yup.array().of(
    yup.object().shape({
      email: yup
        .string()
        .trim()
        .email("Write a valid email. Ex: name@email.com")
        .required("Email is required"),
    })
  ),
});
