import { gql } from "@apollo/client";

export const SIGN_IN = gql`
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

export const UPDATE_SETTINGS = gql`
  mutation updateSettings($update: UpdateSettings) {
    updateRestaurant(update: { settings: $update }) {
      id
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile($update: UpdateRestaurant!) {
    updateRestaurant(update: $update) {
      id
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($update: UpdateRestaurantPassword!) {
    updateRestaurantPassword(update: $update) {
      message
    }
  }
`;
