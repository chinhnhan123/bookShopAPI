const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  fullname: String,
  role: String,
});

// create model
const User = mongoose.model("User", UserSchema);

module.exports = User;
