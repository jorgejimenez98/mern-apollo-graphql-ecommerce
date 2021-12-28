import gql from "graphql-tag";

export const PRODUCT_LIST_QUERY = gql`
  query GetProductList($limit: Int, $offset: Int) {
    getProductList(limit: $limit, offset: $offset) {
      id
      name
      price
      stock
    }
    getProductsCount
  }
`;

export const GET_PRODUCT_DETAILS = gql`
  query GetProduct($productId: ID!) {
    getProduct(id: $productId) {
      id
      name
      price
      stock
    }
  }
`;
