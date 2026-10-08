import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://backend.nilaithal.com/graphql",
    // uri: "http://localhost:1337/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;