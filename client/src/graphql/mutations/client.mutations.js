import gql from "graphql-tag";

export const CREATE_CLIENT = gql`
  mutation createClient($input: ClientInput) {
    createClient(input: $input) {
      id
      name
      lastname
      company
    }
  }
`;

export const DELETE_CLIENT = gql`
  mutation Mutation($deleteClientId: ID) {
    deleteClient(id: $deleteClientId)
  }
`;

export const UPDATE_CLIENT = gql`
  mutation Mutation($input: ClientInput) {
    updateClient(input: $input) {
      id
      lastname
      name
      company
    }
  }
`;
