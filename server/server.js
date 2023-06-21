
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import resolvers from './Graph/Resolvers/bookResolver.js';
import typeDefs from './Graph/typeDefination/booktype.js'; 

const server = new ApolloServer({
  typeDefs,
  resolvers
});
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);