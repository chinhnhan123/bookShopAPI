const BookRepository = require("../repository/BookRepository");

const getAllBooks = async () => {
  try {
    const books = await BookRepository.findAllBooks();
    console.log("services:" + books);
    return books;
  } catch (error) {
    console.log(error);
  }
};

const getBookById = async (id) => {
  try {
    const book = await BookRepository.findBookById({ id });
    return book;
  } catch (error) {
    console.log(error);
  }
};

const createBook = async (data) => {
  try {
    const book = await BookRepository.createBook(data);
    return book;
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = async (id) => {
  try {
    console.log(id);
    const deleteBook = await BookRepository.deleteBook(id);
    return deleteBook;
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (id, newBook) => {
  try {
    const updatebook = await BookRepository.updateBook(id, newBook);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  deleteBook,
  updateBook,
};
