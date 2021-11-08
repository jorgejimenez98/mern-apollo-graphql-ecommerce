const express = require("express");
const app = express();

// Graphql imports
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Root Resolver for Graphql
const root = {
  client: () => {
    return {
      id: "1",
      name: "Jorge",
      lastname: "Jimenez",
      company: "UC",
      emails: [{ email: "jorge@gmail.com" }, { email: "jorge@gmail.com" }],
    };
  },
};

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
