const {gql} = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int 
    friends: [User]
    favoriteMovies: [Movie]

  }
  
  type Movie {
    id: ID!
     name: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie]!
  }

`

module.exports = {typeDefs}