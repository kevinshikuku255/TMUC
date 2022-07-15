import { ApolloServer } from 'apollo-server-express';



/**
 * Creates an Apollo server and identifies if user is authenticated or not
 *
 * @param {obj} schema GraphQL Schema
 * @param {array} resolvers GraphQL Resolvers
 * @param {obj} models Mongoose Models
 */
export const createApolloServer = (schema, resolvers, models) => {
  return new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    context: () => {
       return models;
    }
    
  });
};