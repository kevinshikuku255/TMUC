 import  { gql } from '@apollo/client';

 const postPayload = `
  id
  title
  message
  image
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


 /**Get all news posts*/
  export const GET_POSTS = gql`
      query{
       getPosts{
          ${postPayload}
       }
      }
  `;

/**Create News Post */
export const CREATE_POST = gql`
  mutation($title: String, $message: String, $authorId:String, $image:Upload){
     createPost(title: $title, message:$message, authorId:$authorId, image:$image){
      id
      title
      message
      image
      author{
        id
        name
      }
      createdAt
  }
}
`
