import { gql } from "@apollo/client";

export const DASHBOARD = gql`
  query getDashboardData($min: Date!) {
    todayAnalytics {
      income {
        total
      }
      waiter {
        best {
          name
        }
      }
      popularProduct {
        toplist {
          numberOne {
            name
          }
        }
      }
    }
    analytics(filter: { min: $min }) {
      income {
        createdAt
        total
      }
    }
    analyticsSummary(range: "week") {
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
