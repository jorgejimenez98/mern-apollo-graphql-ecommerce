import { rejects } from "assert";

// Models
import Client from "../../model/client.model";

const clientMutations = {
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
};

export default clientMutations;
