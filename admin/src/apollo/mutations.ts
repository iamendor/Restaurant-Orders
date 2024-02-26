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

export const CREATE_WAITER = gql`
  mutation create($data: CreateWaiter!) {
    createWaiter(data: $data) {
      id
      name
    }
  }
`;

export const DELETE_WAITER = gql`
  mutation delete($where: WhereWaiter!) {
    deleteWaiter(where: $where) {
      message
    }
  }
`;

export const UPDATE_WAITER = gql`
  mutation update($data: UpdateWaiter!) {
    updateWaiter(data: $data) {
      id
      name
    }
  }
`;

export const UPDATE_WAITER_PASSWORD = gql`
  mutation updateWaiterPassword($data: UpdateWaiterPassword!) {
    updateWaiterPassword(data: $data) {
      message
    }
  }
`;

export const CREATE_TABLES = gql`
  mutation createTabs($data: [CreateTable!]!) {
    createTables(data: $data) {
      message
    }
  }
`;

export const DELETE_TABLE = gql`
  mutation delTable($where: WhereTable!) {
    deleteTable(where: $where) {
      message
    }
  }
`;

export const UPDATE_TABLE = gql`
  mutation updTable($data: UpdateTable!) {
    updateTable(data: $data) {
      name
    }
  }
`;
