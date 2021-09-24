 import  { gql } from '@apollo/client';

 const postPayload = `
  id
  title
  message
  image
  email
  authorPic
  createdAt
  authorName
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
  mutation($title: String, $message: String, $authorName:String, $authorPic:String, $image:Upload, $email:String){
     createPost(title: $title, message:$message, authorPic:$authorPic, authorName:$authorName, image:$image, email:$email){
      id
      title
      message
      image
      authorPic
      authorName
      createdAt
  }
}
`
