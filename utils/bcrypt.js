const bcrypt = require("bcrypt");
require("dotenv").config();

const hashPassword = async (plainPassword) => {
  try {
    const hashed = await bcrypt.hash(plainPassword, 8);
    return hashed;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const checkPassword = async (password, encryptedPassword) => {
  try {
    const isValidPassword = await bcrypt.compare(password, encryptedPassword);
    return isValidPassword;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = {
  hashPassword,
  checkPassword,
};
