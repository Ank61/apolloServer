import bookModal from "../../Modal/bookModal.js";
// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//       dates : 'newDate1',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//       dates : 'newDate',
//     },
//   ];

const resolvers = {
  Query: {
    // booksf: () => books,
    booksf: async function () {
      const result = await bookModal.find().clone().catch(function (err) { console.log(err) });
      if (result.length > 0) {
        const bookData = result[0].book;
        return bookData;
      }
      return [];
    }
  },
  Mutation: {
    addBook: async (_, { title, author }) => {
      const newBook = { title, author, dates: "New Item" };
      const document = await bookModal.findOne({ _id: '6493d01dbe033f116ba9c3e4' });
      document.book.push(newBook);
      await document.save();
      // books.push(newBook);
      // return newBook;
      return newBook
    },
    deleteBook: async (_, { title }) => {
      // const index = books.findIndex(book => book.title === title)
      // if (index === -1) {
      //   throw new Error('Book not found');
      // }
      // const deletedBook = books[index]; // To return the deleted item
      // books.splice(index, 1)
      // return { message: "Deleted Successfully" }
       const document = await bookModal.findOne({ _id: '6493d01dbe033f116ba9c3e4' });
       const bookIndex = document.book.findIndex(book => book.title === title);
       if (bookIndex !== -1) {
       document.book.splice(bookIndex, 1);
       }
       await document.save();
       return {title}
    },

    updateBook: async (_, { title, author }) => {
      // const index = books.findIndex(book => book.title===title)
      // books[index] = {title,author}
      // return books
      const document = await bookModal.findOne({ _id: '6493d01dbe033f116ba9c3e4' });
      const bookIndex = document.book.findIndex(book => book.title === title);
      if (bookIndex !== -1) {
        document.book[bookIndex].author = author;
      }
      await document.save();
      return {title,author}
    }
  }
};
export default resolvers;
