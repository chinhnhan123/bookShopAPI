let jwt = require("jsonwebtoken");
const isLoggedIn = async (req, res, next) => {
  try {
    const token = (await req.cookies.access_token) || req.headers.access_token;
    if (!token) return res.sendStatus(400).send("Not login");
    const userData = await jwt.verify(token, process.env.SECRET_KEY);

    req.email = userData.email;
    req.role = userData.role;
    next();
  } catch (error) {
    console.log(
      "🚀 ~ file: AuthMiddleWare.js ~ line 19 ~ isLoggedIn ~ error",
      error
    );
  }
};

module.exports = { isLoggedIn };
