 import  { gql } from '@apollo/client';




 /** Get auth user*/
export const GET_USER = gql`
   query($name:String){
     getUser(name: $name){
      id
      name
      username
      createdAt
      updatedAt
    }
 }
`;


 /** Get auth user*/
export const GET_USERS = gql`
   query($skip:Int, $limit:Int){
     getUser(skip: $skip, limit:$limit){
      id
      name
      username
      createdAt
      updatedAt
    }
 }
`;


 /**Get authenticated user */
  export const GET_AUTH_USER = gql`
      query{
       getAuthUser {
          id
          name
          posts {
          id
          title
          image
          message
          createdAt
          views{
            id
            post
          }
          author{
            id
            name
          }
          }
          createdAt
        }
      }
  `;


/** creates user account */
export const SIGN_UP = gql`
  mutation($name: String, $password: String, $confirmPassword:String) {
     signup(name: $name, password: $password, confirmPassword: $confirmPassword){
         token
     }
  }
`

/** Logs in a user */
export const SIGN_IN = gql`
  mutation($name: String!, $password: String!) {
     signin(name:$name, password: $password){
         token
     }
  }
`
