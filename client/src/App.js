import React from "react";
// Apollo Deps
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  onError: ({ netWorkError, graphqlError }) => {
    console.log("Network Error", netWorkError);
    console.log("GraphQL Error", graphqlError);
  },
});

function App() {
  return (
    /* Init Apollo Provider */
    <ApolloProvider client={client}>
      {/* Components APP goes here */}
      <h1>Hello World</h1>
    </ApolloProvider>
  );
}

export default App;
