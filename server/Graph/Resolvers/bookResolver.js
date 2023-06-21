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

const resolvers = {
    Query: {
      booksf: () => books,
    },
    Mutation: {
      addBook: (_, { title, author }) => {
        const newBook = { title, author, dates: "New Item" };
        books.push(newBook);
        return newBook;
      },
      deleteBook:(_, {title})=>{
       const index = books.findIndex(book => book.title === title)     
       if (index === -1) {
        throw new Error('Book not found');
      }
      const deletedBook = books[index]; // To return the deleted item
      books.splice(index,1)
       return {message : "Deleted Successfully"}
      },
      updateBook: (_,{title,author})=>{
        const index = books.findIndex(book => book.title===title)
        books[index] = {title,author}
        return books
      }
    }
  };
  export default resolvers;
