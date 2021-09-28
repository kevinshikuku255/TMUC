 import  { gql } from '@apollo/client';

 const postPayload = `
  id
  title
  message
  name
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
  mutation($title: String, $message: String, $authorId:String, $name:String, $image:Upload){
     createPost(title: $title, message:$message, name:$name, authorId:$authorId, image:$image){
      id
      title
      message
      name
      image
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
      }
    }
  }
`

