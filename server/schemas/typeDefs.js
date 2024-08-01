const typeDefs = `
    type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]!
    }

    type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
    }

    type Auth {
    token: ID!
    user: User 
    }

    type Query {
    users: [User]
    user(username: String!): User
    savedBooks(username: String): [Book]
    me: User
    }

    input BookInfo {
    authors: [String] 
    description: String!
    bookId: String!
    image: String
    link: String
    title: String! 
    }

    type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(_id: ID input: BookInfo): User
    removeBook(_id: ID bookId: String!): User
    }
`

module.exports = typeDefs;