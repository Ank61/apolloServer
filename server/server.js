
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import resolvers from './Graph/Resolvers/bookResolver.js';
import typeDefs from './Graph/typeDefination/booktype.js'; 
import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://root:root@cluster0.l1tlu7o.mongodb.net/?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((res) => {
  console.log('Database connected successfully',)
}).catch((error) => {
  console.log("Error occured while connecting",error)
})

const server = new ApolloServer({
  typeDefs,
  resolvers
});
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);