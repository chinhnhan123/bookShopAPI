let jwt = require("jsonwebtoken");

const createTokenjwt = async (payload) => {
  try {
    let token = await jwt.sign(payload, "thisissecret");
    return token;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = {
  createTokenjwt,
};
