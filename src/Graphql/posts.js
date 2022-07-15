 import  { gql } from '@apollo/client';






  /**Get all news posts*/
  export const GET_DETAILS = gql`

 query{
    getDetails {
      headline
      message
      timeStamp
      image
      images
      link
    }
  }
  `;



