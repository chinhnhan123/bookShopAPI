const BookModel = require("../database/model/Book");

const findAllBooks = async (options) => {
  try {
    const books = await BookModel.paginate({}, options);
    console.log(books);
    return books;
  } catch (error) {
    console.log(error);
  }
};

const findBookById = async (id) => {
  try {
    const book = await BookModel.findOne(id);
    return book;
  } catch (error) {
    console.log(error);
  }
};

const createBook = async (data) => {
  try {
    const book = await BookModel.create(data);
    return book;
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = async (id) => {
  try {
    const deletebook = await BookModel.deleteOne({ _id: id });
    return deletebook;
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (id, data) => {
  try {
    const updatebook = await BookModel.replaceOne({ _id: id }, data); // replaceone thay thế all. còn update thay thế giá trị truyền vào.
    return updatebook;
  } catch (error) {}
};
module.exports = {
  findAllBooks,
  findBookById,
  createBook,
  deleteBook,
  updateBook,
};
