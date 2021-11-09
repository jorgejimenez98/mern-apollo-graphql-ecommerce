const express = require("express");
const app = express();

// Dependencies
require("./data/db");

// Graphql imports
const { graphqlHTTP } = require("express-graphql");
const schema = require("./data/schema");

// Middlewares
app.use(
  "/graphql",
  graphqlHTTP({
    // Parsin schema
    schema,
    //  use Graphiql
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
