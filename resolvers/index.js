const GMR = require("graphql-merge-resolvers");

// Resolvers
const clientResolvers = require("./client.resolvers");

module.exports = GMR.merge([clientResolvers]);
