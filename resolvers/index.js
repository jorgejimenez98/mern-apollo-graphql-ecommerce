import { clientMutations, clientQueries } from "./client";
import { productMutations, productQueries } from "./product";

const resolvers = {
  Query: {
    ...clientQueries,
    ...productQueries,
  },
  Mutation: {
    ...clientMutations,
    ...productMutations,
  },
};

export default resolvers;
