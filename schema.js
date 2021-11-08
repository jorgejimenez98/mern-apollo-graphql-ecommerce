const { buildSchema } = require("graphql");

const schema = buildSchema(`

    # ----------- CLASSES

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

    
    # ----------- ENUM TYPES
    
    enum ClientType {
        BASIC
        PREMIUN
    }
    

    # ----------- QUERIES
    type Query {
        getClient(id: ID) : Client
    }
    

    # ----------- INPUTS

    """ Input to Create a new Client """
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

    """ Input to Create a new Product """
    input ProductInput {
        id: ID
        product: String!
        price: Int!
    }

    """ Input to create a new Email """

    input EmailInput {
        email: String!
    }

    # ----------- Mutations

    """ Clients Mutations """
    type Mutation {
        """ Allow to create new clients"""
        createClient(input: ClientInput): Client
    }
`);

module.exports = schema;
