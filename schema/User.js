import { gql } from 'apollo-server-express';


/**
 * User schema
 */
const UserSchema = gql`
  # -----------------Model Objects----------------------------------------
  type User {
    phone: String
    name: String
    admition: String
  }

  # -----------------Return Payloads----------------------------------------
  type UserPayload {
    phone: String
    name: String
    admition: String
  }

  type UsersPayload {
    users: [UserPayload]!
    count: String!
  }

  # -------------------Queries--------------------------------------
  extend type Query {
    # Gets user by adm or by id
    getUser(admition: String): UserPayload

    # Gets all users
    getUsers: UsersPayload
  }

  # ------------------Mutations---------------------------------------
  extend type Mutation {
    # Signs up new user
    signup(phone: String!, name: String!, admition: String!): User
  }
`;
export default UserSchema; 
