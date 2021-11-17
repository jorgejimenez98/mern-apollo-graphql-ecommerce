import gql from "graphql-tag";

export const CLIENTS_QUERY = gql`
  query GetClientsList($limit: Int, $offset: Int) {
    getClientsList(limit: $limit, offset: $offset) {
      id
      name
      lastname
      company
    }
    getClientsCount
  }
`;

export const CLIENT_DETAILS = gql`
  query Query($getClientId: ID!) {
    getClient(id: $getClientId) {
      id
      name
      lastname
      company
      age
      type
      emails {
        email
      }
    }
  }
`;
