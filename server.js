const express = require("express");
const app = express();

// Graphql imports
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Root Resolver for Graphql
class Client {
  constructor(id, { name, lastname, company, email }) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.company = company;
    this.email = email;
  }
}

const clientsDB = [];

const root = {
  client: () => {
    return {
      id: "1",
      name: "Jorge",
      lastname: "Jimenez",
      company: "UC",
      email: "jorge@gmail.com",
    };
  },
  createClient: ({ input }) => {
    const id = require("crypto").randomBytes(10).toString("hex");
    clientsDB[id] = input;
    return new Client(id, input);
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
