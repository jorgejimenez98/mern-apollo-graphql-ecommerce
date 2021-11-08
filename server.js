const express = require("express");
const app = express();

// Graphql imports
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(
  "/graphql",
  graphqlHTTP({
    // Parsin schema
    schema,
    // Resolver as root value
    rootValue: resolvers,
    //  use Graphiql
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
