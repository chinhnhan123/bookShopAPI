const UserModel = require("../database/model/User");
const { hashPassword, checkPassword } = require("../utils/bcrypt");
const { createTokenjwt } = require("../utils/jwt");

const findUser = async (data) => {
  try {
    let userEmail = data.email;
    const user = await UserModel.findOne({ email: userEmail });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (data) => {
  try {
    const hashedPassword = await hashPassword(data.password);
    const newUser = await UserModel.create({
      ...data,
      password: hashedPassword,
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const checkPasswordRep = async (email, password) => {
  try {
    const result = await UserModel.findOne({ email });
    const isValidPassword = await checkPassword(password, result.password);
    return isValidPassword;
  } catch (error) {
    console.log(error);
  }
};

const createToken = async (data) => {
  try {
    const { email, role } = data;
    const payload = { email, role };
    const token = createTokenjwt(payload);
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findUser,
  createUser,
  checkPasswordRep,
  createToken,
};
