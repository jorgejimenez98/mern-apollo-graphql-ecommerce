import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";

const gqlFiles = readdirSync(join(__dirname, "./graphql"));

let typeDefs = "";

gqlFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, "./graphql", file), {
    encoding: "utf8",
  });
});

const schema = makeExecutableSchema({
  typeDefs,
});

export default schema;
