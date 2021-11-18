import { rejects } from "assert";

// Models
import Client from "../../model/client.model";

const clientQueries = {
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
};

export default clientQueries;
