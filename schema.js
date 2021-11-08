const buildschema = require("graphql");

const schema = buildschema(`
    type Query {
        hola: String
    }
`);

module.exports = schema;
