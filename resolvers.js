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

const resolvers = {
  getClient: ({ id }) => {
    return new Client(id, clientsDB[id]);
  },
  createClient: ({ input }) => {
    const id = require("crypto").randomBytes(10).toString("hex");
    clientsDB[id] = input;
    return new Client(id, input);
  },
};

module.exports = resolvers;
