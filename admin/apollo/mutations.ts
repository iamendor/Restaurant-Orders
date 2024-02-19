import { gql } from "@apollo/client";

export const SignIn = gql`
  mutation signIn($credentials: LoginRestaurant!) {
    loginRestaurant(credentials: $credentials) {
      restaurant {
        id
        name
      }
      access_token
    }
  }
`;
