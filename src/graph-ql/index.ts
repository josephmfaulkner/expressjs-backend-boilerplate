
import "reflect-metadata";
import { ApolloServerExpressConfig } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { MessageResolver } from "./message/MessageResolver";

export const createSchema  = () : Promise<GraphQLSchema> => 
buildSchema({
        resolvers: [MessageResolver],
        emitSchemaFile: true,
        validate: true,
});  
