
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `
  type Book {
    title: String
    author: String
    dates : String
  }
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  
  type Query {
    booksf: [Book]
  }
  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    dates : 'newDate1',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    dates : 'newDate',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    booksf: () => books,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { title, author, dates: "New Item" };
      books.push(newBook);
      return newBook;
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
//The Mutation type is similar in structure and purpose to the Query type. 
//Whereas the Query type defines entry points for read operations, the Mutation type defines entry points for write operations.
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);