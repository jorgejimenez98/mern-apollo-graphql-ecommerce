const { rejects } = require("assert");
const { resolve } = require("path");

// Models
const Client = require("../model/client.model");

// Client Resolver
const clientResolvers = {
  // Queries
  Query: {
    // Get Clients List
    getClientsList: (root, { limit, offset }) => {
      return new Promise((resolve, object) => {
        Client.find({}, (error, data) => {
          // Check Error
          if (error) rejects(error);
          // Return new Client
          else resolve(data);
        })
          .limit(limit)
          .skip(offset);
      });
    },

    // Get Client By ID
    getClient: (root, { id }) => {
      // Return promise consult
      return new Promise((resolve, object) => {
        // Get Client from Mongo DB
        Client.findById(id, (error, client) => {
          // Check Error
          if (error) rejects(error);
          // Return new Client
          else resolve(client);
        });
      });
    },

    // Get Client By ID
    getClientsCount: (root) => {
      // Return promise consult
      return new Promise((resolve, object) => {
        // Get Client from Mongo DB
        Client.countDocuments({}, (error, count) => {
          // Check Error
          if (error) rejects(error);
          // Return new Client
          else resolve(count);
        });
      });
    },
  },

  // Mutations
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

    // Delete Client Mutation
    deleteClient: (root, { id }) => {
      return new Promise((resolve, object) => {
        // Delete Client from Mongoose by ID
        Client.findByIdAndRemove(id, (error) => {
          // Check error
          if (error) rejects(error);
          // Return Response
          else resolve("Client Deleted Successfully");
        });
      });
    },

    // Nex Mutation Here
  },
};

module.exports = clientResolvers;
