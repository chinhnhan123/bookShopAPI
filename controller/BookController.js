const BookServices = require("../services/BookServices");

const getAllBooks = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const options = { page, limit };
  const books = await BookServices.getAllBooks(options);
  res.send(books);
};

const getBook = async (req, res) => {
  const id = req.params.id;
  const book = await BookServices.getBookById(id);
  res.send(book);
};

const createBook = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const book = await BookServices.createBook(req.body);
    if (!book) return res.sendStatus(500);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const deleteBook = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    console.log(req.params.id);
    const deletebook = await BookServices.deleteBook(req.params.id);
    if (!deletebook) return res.sendStatus(500);
    return res.status(200).send("deletebook successful!!!!!");
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updateBook = await BookServices.updateBook(req.params.id, req.body);
    return res.status(200).send("updateBook successful");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
};
