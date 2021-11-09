const resolvers = require("../resolvers");
const { importSchema } = require("graphql-import");
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = importSchema("data/schema.graphql");
const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
