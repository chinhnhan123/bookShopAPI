const UserRepository = require("../repository/UserRepository");

const getUser = async (data) => {
  try {
    const user = await UserRepository.findUser(data);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (data) => {
  try {
    const user = await UserRepository.createUser(data);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const checkPassword = async (email, pw) => {
  try {
    const user = await UserRepository.checkPasswordRep(email, pw);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createToken = async (data) => {
  try {
    const token = await UserRepository.createToken(data);
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
  createUser,
  checkPassword,
  createToken,
};
