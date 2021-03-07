import 'graphql-import-node';
import * as typeDefs from './schema/schema.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import adminResolverMap from './resolvers/admin.query';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: adminResolverMap,
});
export default schema;

