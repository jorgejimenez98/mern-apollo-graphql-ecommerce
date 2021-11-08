const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        lastname: String
        company: String
        email: String
    }

    type Query {
        getClient(id: ID) : Client
    }

    input ClientInput {
        id: ID
        name: String!
        lastname: String!
        company: String!
        email: String! 
    }

    type Mutation {
        createClient(input: ClientInput): Client
    }
`);

module.exports = schema;
