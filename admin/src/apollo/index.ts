import { ApolloClient, InMemoryCache } from "@apollo/client";
const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API,
  cache: new InMemoryCache(),
  defaultOptions: { query: { fetchPolicy: "no-cache" } },
});

export default apolloClient;
