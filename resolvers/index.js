const GMR = require("graphql-merge-resolvers");

// Resolvers
const clientResolvers = require("./client.resolvers");
const productResolvers = require("./product.resolvers");

module.exports = GMR.merge([clientResolvers, productResolvers]);
