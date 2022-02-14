const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Query {
    me: User
}

input BookInput {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(data: BookInput): User
  removeBook(bookId: ID): User
}

type Auth {
    token: ID!
    user: User
}

`

module.exports = typeDefs;