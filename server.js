const express = require("express");

// Dependencies
require("./data/db");

// Graphql imports
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./data/schema");
const resolvers = require("./resolvers");

// Start Apollo Server Function
async function startApolloServer(typeDefs, resolvers) {
  // Create Apps Instance
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  // Middlewares
  await server.start();
  server.applyMiddleware({ app });

  // Start App
  const url = `http://localhost:5000${server.graphqlPath}`;
  app.listen({ port: 5000 }, () => console.log(`Server Running on ${url}`));
}

// Call Start Server Function
startApolloServer(typeDefs, resolvers);
