import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () =>
  new ApolloClient({
    uri: process.env.API,
    cache: new InMemoryCache(),
  });

export default createApolloClient;
