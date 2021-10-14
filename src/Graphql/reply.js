 import  { gql } from '@apollo/client';



/**Reply on a post */
export const CREATE_REPLY = gql`
  mutation($body: String, $postId:String){
     createReply(body:$body, postId:$postId){
      id
      body
      createdAt
  }
}
`