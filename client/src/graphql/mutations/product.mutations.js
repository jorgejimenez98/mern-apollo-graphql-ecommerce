import gql from "graphql-tag";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
      id
      name
      price
      stock
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation Mutation($productId: ID) {
    deleteProduct(id: $productId)
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($input: ProductInput) {
    updateProduct(input: $input) {
      id
      name
      price
      stock
    }
  }
`;
