const { rejects } = require("assert");
const { resolve } = require("path");

// Models
const Client = require("../model/client.model");

// Root Resolver for Graphql

const clientsDB = [];

const resolvers = {
  Query: {
    getClient: ({ id }) => {
      return new Client(id, clientsDB[id]);
    },
  },
  Mutation: {
    // Create Client Mutation
    createClient: (root, { input }) => {
      // Create Client Model
      const newClient = new Client({
        name: input.name,
        lastname: input.lastname,
        company: input.company,
        emails: input.emails,
        age: input.age,
        type: input.type,
        orders: input.orders,
      });
      // Set ID
      newClient.id = newClient._id;

      // Return Promise
      return new Promise((resolve, object) => {
        newClient.save((error) => {
          // Check Error
          if (error) rejects(error);
          // Return new Client
          else resolve(newClient);
        });
      });
    },
    // New Mutation Goes Here
  },
};

module.exports = resolvers;
