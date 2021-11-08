const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        hola: String
    }
`);

module.exports = schema;
