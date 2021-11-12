import React from "react";
// Components
import { ScrollTop } from "./components";
// Apollo Deps
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// Apollo Client Extension: Apollo-Devs-Tools
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
      <ScrollTop />
    </ApolloProvider>
  );
}

export default App;
