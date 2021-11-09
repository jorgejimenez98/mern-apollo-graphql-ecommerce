const { importSchema } = require("graphql-import");

const typeDefs = importSchema("data/schema.graphql");

module.exports = typeDefs;
