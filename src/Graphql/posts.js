 import  { gql } from '@apollo/client';

 const postPayload = `
  id
  title
  name
  image
  message
  views{
    id
    post
  }
  imagePublicId
  author{
    id
    name
  }
  createdAt
 `


 /**Get message by ID */
  export const GET_POST = gql`
      query($id: ID!){
       getPost(id: $id){
          ${postPayload}
       }
      }
  `;



 /**Delete post */
  export const DELETE_POST = gql`
      mutation($id: ID!, $authUserId: ID,  $imagePublicId: String){
       deletePost(id: $id,authUserId: $authUserId imagePublicId: $imagePublicId)
      }
  `;



 /**Get all news posts*/
  export const GET_POSTS = gql`
      query{
       getPosts{
          ${postPayload}
       }
      }
  `;


/** Record a view */
export const RECORD_VIEW = gql`
   mutation($postId: ID!){
     createView(postId:$postId){
       id
       post
       createdAt
     }
   }
`;


/**Create News Post */
export const CREATE_POST = gql`
  mutation($title: String, $message: String, $authorId:String, $name:String, $image:Upload){
     createPost(title: $title, message:$message, name:$name, authorId:$authorId, image:$image){
      id
      title
      message
      name
      image
      views{
        id
        post
      }
      author{
        id
        name
      }
      createdAt
  }
}
`


/** Publishes new message in real time */
export const NEW_POST = gql`
  subscription {
    newPost{
      id
      title
      name
      message
      author{
      id
      name
      }
    }
  }
`

