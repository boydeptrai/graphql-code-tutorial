import { gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
        id
        name
        age
        username
        nationality
    }
  }
`

const QUERY_ALL_MOVIES =gql`
   query getAllMovies {
    movies {
        name
    }
   }
`

export { QUERY_ALL_USERS, QUERY_ALL_MOVIES}