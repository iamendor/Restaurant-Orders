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
          id
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
    createAndLogin: () => `
      mutation createAndLoginWaiter($data: CreateWaiter!, $credentials: LoginWaiter!){
        createWaiter(data: $data){
          id
          name
          gender
        }
        loginWaiter(credentials: $credentials){
          access_token
        }
      }
    `,
  },
  table: {
    create: () => `
      mutation createTables($data: CreateTable!, $dataMultiple: [CreateTable!]!){
        createTable(data: $data){
          id
          name
        }
        createTables(data: $dataMultiple){
          message
        }
      }
    `,

    update: () => `
      mutation update($data: UpdateTable!){
        updateTable(data: $data){
          id
          name
        }
      }
    `,
    delete: () => `
      mutation delete($where: WhereTable!){
        deleteTable(where: $where){
          message
        }
      }
    `,
  },
  category: {
    create: () => `
      mutation create($data: CreateCategory!, $dataMultiple: [CreateCategory!]!){
        createCategory(data: $data){
          id
          name
        }
        createCategories(data: $dataMultiple){
          message
        }
      }
    `,
    update: () => `
      mutation update($data: UpdateCategory!){
        updateCategory(data: $data){
          id
          name
        }
      }
    `,
    delete: () => `
      mutation delete($where: WhereCategory!){
        deleteCategory(where: $where){
          message
        }
      }
    `,
  },
  product: {
    create: () => `
      mutation create($data: CreateProduct!, $dataProducts: [CreateProduct!]!){
        createProduct(data: $data){
          id
          name
          price
          category{
            id
          }
        }
        createProducts(data: $dataProducts){
          message
        }
      }
    `,
    update: () => `
      mutation update($data: UpdateProduct!){
        updateProduct(data: $data){
          category{
            id
          }
          name
          
        }
      }
    `,
    delete: () => `
      mutation delete($where: WhereProduct!){
        deleteProduct(where: $where){
          message
        }
      }
    `,
  },
  order: {
    create: () => `
      mutation create($data: CreateOrder!, $dataMultiple: [CreateOrder!]!){
        createOrder(data: $data){
          id
          description
        }
        createOrders(data: $dataMultiple){
          message
        }
      }
    `,
    update: () => `
      mutation update($data: UpdateOrder!){
        updateOrder(data: $data){
          isReady
        }
      }
    `,
    delete: () => `
      mutation delete($where: WhereOrder!){
        deleteOrder(where:$where){
          message
        }
      }
    `,
  },
  meal: {
    create: () => `
      mutation create($data: CreateMeal!){
        createMeal(data: $data){
          id
          total
        }
      }
    `,
    delete: () => `
      mutation delete($where: WhereMeal!){
        deleteMeal(where: $where){
          message
        }
      }
    `,
  },
});
