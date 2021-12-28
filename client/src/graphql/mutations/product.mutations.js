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
