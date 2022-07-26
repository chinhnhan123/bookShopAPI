const mongoose = require("mongoose");
const { ADMIN_ROLE, USER_ROLE, SELLER_ROLE } = require("../../constants/role");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  fullname: String,
  role: {
    type: String,
    enum: [ADMIN_ROLE, USER_ROLE, SELLER_ROLE],
    default: USER_ROLE,
  },
});

// create model
const User = mongoose.model("User", UserSchema);

module.exports = User;
