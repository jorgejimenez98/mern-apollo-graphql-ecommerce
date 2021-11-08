const express = require("express");
const app = express();

// Graphql imports
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Root Resolver for Graphql
const root = { hola: () => "Hola mundo desde Graphql" };

app.use(
  "/graphql",
  graphqlHTTP({
    // Parsin schema
    schema,
    // Resolver as root value
    rootValue: root,
    //  use Graphiql
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
