const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        lastname: String
        company: String
        emails: [Email]
        age: Int
        type: ClientType
        orders: [Order]
    }

    type Order {
        product: String
        price: Int
    }

    type Email {
        email: String
    }

    enum ClientType {
        BASIC
        PREMIUN
    }

    type Query {
        getClient(id: ID) : Client
    }

    input ClientInput {
        id: ID
        name: String!
        lastname: String!
        company: String!
        emails: [EmailInput] 
        age: Int!
        type: ClientType!
        orders: [ProductInput]
    }

    input ProductInput {
        id: ID
        product: String!
        price: Int!
    }

    input EmailInput {
        email: String!
    }

    type Mutation {
        createClient(input: ClientInput): Client
    }
`);

module.exports = schema;
