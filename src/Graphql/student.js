import { gql } from "@apollo/client";

/**Sign a user*/
export const SIGN_USER = gql`
  # -----------------Model Objects----------------------------------------


  mutation ($name: String!, $phone: String!, $admition: String!) {
    signup(name: $name, phone: $phone, admition: $admition) {
      name
      phone
      admition
    }
  }
`;
