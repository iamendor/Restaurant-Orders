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
    list: () => `
      query{
        tables{
          name
        }
      }
    `,
    find: () => `
      query find($where: WhereTable!){
        table(where:$where){
          name
        }
      }
    `,
  },
});
