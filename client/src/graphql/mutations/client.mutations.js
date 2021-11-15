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
