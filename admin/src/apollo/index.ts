import { ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors.forEach((err) => {
    if (err.message == "unauthorized") console.log("UNAUTH");
  });
});

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API,
  cache: new InMemoryCache(),
});

export default apolloClient;
