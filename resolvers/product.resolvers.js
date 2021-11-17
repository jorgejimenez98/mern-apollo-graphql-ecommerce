const { rejects } = require("assert");
const { resolve } = require("path");

// Models
const Product = require("../model/product.model");

// Client Resolver
const productResolvers = {
  // Queries
  Query: {},

  // Mutations
  Mutation: {
    // Create Product Resolver
    createProduct: (root, { input }) => {
      // Create Client Model
      const newProduct = new Product({
        name: input.name,
        price: input.price,
        stock: input.stock,
      });

      // Return Promise
      return new Promise((resolve, object) => {
        newProduct.save((error) => {
          // Check Error
          if (error) rejects(error);
          // Return new Client
          else resolve(newProduct);
        });
      });
    },

    // Next Mutation Here
  },
};

module.exports = productResolvers;
