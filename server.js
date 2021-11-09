const express = require("express");
const app = express();
let apolloServer = null;

// Dependencies
require("./data/db");

// Graphql imports
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./data/schema");
const resolvers = require("./resolvers");

// Start Server
async function startServer() {
  // Create Apollo Server
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  // Await Apollo Server
  await apolloServer.start();
  // Apply middleware
  apolloServer.applyMiddleware({ app });
}
startServer();

const url = `http://localhost:5000${apolloServer.graphqlPath}`;

app.listen(5000, function () {
  console.log(`Server Running on ${url}`);
});
