export const getQueries = () => ({
  restaurant: {
    waiters: () => `
      query listWaiters {
        waiters {
          id
          name
          gender
        }
      }
    `,

    info: () => `
      query info {
        restaurantInfo {
          name
          address {
            address1
          }
        }
      }
    `,

    waitersAndInfo: () => `
      query infoAndWaiters{
        waiters{
          id
          name
          gender
        }
        restaurantInfo{
          name
          address{
            address1
          }
        }
      }
    `,
  },
  waiter: {
    info: () => `
      query info($where: WhereWaiter){
        waiterInfo(where: $where){
          id
          name
        }
      }
    `,
  },
  table: {
    listAndFind: () => `
      query listAndFind($where: WhereTable!){
        tables{
          id
          name
        }
        table(where: $where){
          id
          name
        }
      }
    `,
  },
  category: {
    listAndFind: () => `
      query listAndFind($where: WhereCategory!){
        categories{
          id
          name
        }
        category(where: $where){
          id
          name
        }
      }
    `,
  },
  product: {
    listAndFind: () => `
      query listAndFind($where: WhereProduct!){
        products{
          id
          name
        }
        product(where: $where){
          id
          name
        }
      }
    `,
  },
  order: {
    listAndFind: () => `
      query listAndFind($where: WhereOrder!){
        orders{
          description
        }
        order(where: $where){
          isReady
          description
        }
      }
    `,
  },
  meals: {
    listAndFind: () => `
      query listAndFind($where: WhereMeal!){
        meals{
          id
        }
        meal(where: $where){
          total
          id
        }
      }
    `,
  },
  analytics: {
    list: () => `
      query list{
        analytics{
          id
        }
      }
    `,
  },
});
