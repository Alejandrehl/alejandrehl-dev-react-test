import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api"
});

export const graphqlClient = client.query({
  query: gql`
    {
      photos {
        data {
          id
          title
          url
          thumbnailUrl
        }
      }
    }
  `
});

export const restClient = fetch("https://jsonplaceholder.typicode.com/photos");
