import express from "express";
const app = express();
let apolloServer = null;

// Dependencies
import "./data/db";

// Graphql imports
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./data/schema";
import resolvers from "./resolvers";

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
