import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors.forEach((err) => {
    if (err.message == "unauthorized") console.log("UNAUTH");
  });
});

const uri = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API,
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([uri, errorLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
