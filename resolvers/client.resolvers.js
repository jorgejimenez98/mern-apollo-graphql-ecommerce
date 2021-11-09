const { rejects } = require("assert");
const { resolve } = require("path");

// Models
const Client = require("../model/client.model");

// Root Resolver for Graphql

const clientsDB = [];

const clientResolvers = {
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

    // Update Client Mutation
    updateClient: (root, { input }) => {
      return new Promise((resolve, object) => {
        Client.findByIdAndUpdate(
          { _id: input.id }, // Filter
          input, // New Values
          { new: true }, // Return new Updated values
          (error, newClient) => {
            // Check Error
            if (error) rejects(error);
            // Return new Client
            else resolve(newClient);
          }
        );
      });
    },

    // Nex Mutation Here
  },
};

module.exports = clientResolvers;
