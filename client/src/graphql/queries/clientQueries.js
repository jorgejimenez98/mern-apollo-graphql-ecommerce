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
