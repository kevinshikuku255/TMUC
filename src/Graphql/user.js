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

 /** Get gamers*/
export const GET_GAMERS = gql`
   query($skip:Int, $limit:Int){
     getGamers(skip: $skip, limit:$limit){
      id
      name
      flips
      score
      username
      createdAt
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

/** creates gamer account */
export const GAMER_SIGN_IN = gql`
  mutation($name: String) {
     gamerSignin(name: $name){
        id
        name
        username
        flips
        score
        createdAt
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

/** save scores */
export const SAVE_SCORES = gql`
  mutation($score: String, $flips_: String, $username: String){
   saveGamerScores(score: $score, flips_: $flips_, username: $username){
        id
        name
        username
        flips
        score
        createdAt
 }
}
`