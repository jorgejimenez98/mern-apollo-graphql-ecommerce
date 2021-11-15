import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import { Page403, TheLayout } from "./components";
import { Login } from "./screens";
// Apollo Deps
import { ApolloProvider } from "@apollo/client";
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
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props) => <TheLayout {...props} />} />
          <Route path="/403" exact render={(props) => <Page403 {...props} />} />
          <Route path="/login" exact render={(props) => <Login {...props} />} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
