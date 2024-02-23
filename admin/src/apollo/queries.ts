import { gql } from "@apollo/client";

export const DASHBOARD = gql`
  query getDashboardData($min: Date!) {
    todaySummary: analyticsSummary(range: "today") {
      income {
        total
      }
      waiter {
        best {
          name
        }
      }
    }
    analytics(filter: { min: $min }) {
      income {
        createdAt
        total
      }
    }
    weeklySummary: analyticsSummary {
      waiter {
        best {
          name
        }
      }
      income {
        average
        median
        range {
          top {
            createdAt
            total
          }
        }
      }
    }

    orders(filter: { isClosed: "false" }) {
      id
      createdAt
      isReady
      table {
        name
      }
      product {
        name
      }
    }
    restaurantInfo {
      open
      currency {
        symbol
      }
    }
    listTasks(filter: { done: "false" }) {
      id
      base {
        name
      }
    }
  }
`;

export const ACCOUNT = gql`
  query getAccountData {
    restaurantInfo {
      name
      email
      createdAt
      open
      address {
        country
        zip
        city
        address1
        address2
      }
      currency {
        name
      }
      settings {
        enableAnalytics
      }
    }
  }
`;

export const CURRENCIES = gql`
  query curr {
    listCurrencies {
      name
    }
  }
`;

export const WAITERS = gql`
  query listWaiters {
    waiters {
      id
      name
      email
      gender
      profileIcon
    }
  }
`;

export const WAITER = gql`
  query getWaiter($where: WhereWaiter!) {
    waiterInfo(where: $where) {
      id
      profileIcon
      name
      email
      gender
    }
  }
`;
