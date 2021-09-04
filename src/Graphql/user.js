 import  { gql } from '@apollo/client';



 const userPayload =`
   id
   tamname
   messages{
        id
        body
        sender
        receiver
        createdAt
   }
    group
    image
    coverImage
`


 const payload = `
  team{
    id
    teamname
    fan
    group
    token
  }
  fan{
    id
    fanname
    messages{
        id
        body
        sender{
          id
          fanname
        }
        receiver
        createdAt
    }
    likes{
     id
     message
     fan{
       id
       fanname
     }
     createdAt
   }
  }
 `




/** Logs in a fan */
export const SIGN_UP = gql`
  mutation($fanname: String!, $password: String!) {
     signup(fanname: $fanname, password: $password){
         fanname
     }
  }
`

/** Logs in a fan */
export const SIGN_IN = gql`
  mutation($teamname: String, $fanname: String, $password: String) {
     signin(teamname:$teamname, fanname: $fanname, password: $password){
         ${payload}
     }
  }
`
