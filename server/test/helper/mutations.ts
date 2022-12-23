export const getMutations = () => ({
  restaurant: {
    signup: () => `
      mutation signupRestaurant($data: CreateRestaurant!) {
        signup(data: $data) {
            name
            address {
              address1 
        }
      }
    `,
    login: () => `
      mutation loginRestaurant($credentials: LoginRestaurant!) {
        loginRestaurant(credentials: $credentials) {
          restaurant {
            name
          }
          access_token
        }
      }
    `,
    update: () => `
      mutation updateRestaurant($update: UpdateRestaurant!, $credentials: LoginRestaurant!) {
        updateRestaurant(update: $update) {
          name
          id
          email
        }
        loginRestaurant(credentials: $credentials){
          access_token
        }
      }
    `,
    updatePassword: () => `
      mutation updateRPassword($update: UpdateRestaurantPassword!, $credentials: LoginRestaurant!) {
        updateRestaurantPassword(update: $update) {
          message
        }
        loginRestaurant(credentials: $credentials){
          access_token
        }
      }
    `,

    delete: () => `
      mutation deleteRestaurant {
        deleteRestaurant {
          message
        }
      }
    `,

    signupAndLogin: () => `
      mutation createWithWaiter($data: CreateRestaurant!, $credentials: LoginRestaurant!){
        signup(data: $data){
          name
          address{
            address1
          }
        }
        loginRestaurant(credentials:$credentials){
          access_token
          restaurant{
            name
          }
        }
      }
    `,
  },

  waiter: {
    create: () => `
      mutation createWaiter($data: CreateWaiter!, $credentials: LoginWaiter!){
        createWaiter(data: $data){
          id
          name
          gender
        }
        loginWaiter(credentials: $credentials){
          access_token
          waiter{
            name
          }
        }
      }
    `,
    update: () => `
      mutation updateWaiter($data: UpdateWaiter!){
        updateWaiter(data:$data){
          name
        }
      }
    `,

    updatePassword: () => `
      mutation updatePassword($data: UpdateWaiterPassword!, $credentials: LoginWaiter!){
        updateWaiterPassword(data: $data){
          message
        }
        loginWaiter(credentials:$credentials){
          access_token
        }

      }

    `,

    delete: () => `
      mutation deleteWaiter($where: WhereWaiter!){
        deleteWaiter(where: $where){
          message
        }
      }
    `,

    login: () => `
      mutation loginWaiter($credentials: LoginWaiter!){
        loginWaiter(credentials: $credentials){
          waiter{
            name
          }
          access_token
        }
      }
    `,
  },
});
