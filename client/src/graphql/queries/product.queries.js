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
