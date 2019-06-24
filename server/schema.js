const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Upload 

  type File {
    filename: String
    mimetype: String 
    encoding: String
  }

  type User {
    id: ID,
    fullname: String
  }
  type Query {
    getUser(id : ID): User,
  }

  type Mutation {
    singleFileUpload(file: Upload!): HotDog
  }

  type HotDog {
    valid: Boolean
    confidence: Int
  }

`

