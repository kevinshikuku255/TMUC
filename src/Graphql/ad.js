 import  { gql } from '@apollo/client';

 const ad =`
   id
   company
   message
   image
   avartor
`




/** Logs in a fan */
 /**Get message by ID */
  export const GET_AD = gql`
      query($company: String){
       get_ad(company: $company){
          ${ad}
       }
      }
  `;

