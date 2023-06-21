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
  type response {
    message:String
  }
  type Mutation {
    addBook(title: String, author: String): Book
    deleteBook(title :String) : Book
    updateBook(title :String,author:String): Book
  }
`;
export default typeDefs;