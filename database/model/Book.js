const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const { Schema } = mongoose;
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

bookSchema.plugin(mongoosePaginate);

// create model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
