import { gql } from "@apollo/client";

const CREATE_USER_MUTATION =gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
        name
        id
    }
  }
`

export {CREATE_USER_MUTATION}