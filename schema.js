const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        lastname: String
        company: String
        emails: [Email]
    }

    type Email {
        email: String
    }

    type Query {
        client: Client
    }
`);

module.exports = schema;
