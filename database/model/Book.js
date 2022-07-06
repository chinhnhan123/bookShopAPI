const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookSchema = new Schema({
  title: String,
  category: String,
  description: String,
  author: String,
  publisher: String,
  price: Number,
});

// create model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
