const result = require("dotenv").config();
// console.log("alo", result);
// console.log(typeof process.env.SALT);
const bcrypt = require("bcrypt");

const hashPassword = async (plainPassword) => {
  try {
    const hashed = await bcrypt.hash(plainPassword, parseInt(process.env.SALT));

    return hashed;
  } catch (error) {
    console.log("🚀 ~ file: bcrypt.js ~ line 13 ~ hashPassword ~ error", error);
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
