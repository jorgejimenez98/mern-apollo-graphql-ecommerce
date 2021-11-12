import gql from "graphql-tag";

export const CLIENTS_QUERY = gql`
  {
    getClientsList {
      id
      name
      lastname
      company
    }
  }
`;
