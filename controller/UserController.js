const UserServices = require("../services/UserServices");

const register = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const findUser = await UserServices.getUser(req.body);
    if (findUser) return res.status(400).send("User already exists");
    const createUser = await UserServices.createUser(req.body);
    if (!createUser) return res.status(500).send("Internal server error");
    return res.status(200).send(createUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send("empty email or password");
  try {
    const findUser = await UserServices.getUser(req.body);
    if (!findUser) return res.status(400).send("User does not exists");

    const checkPassword = await UserServices.checkPassword(email, password);
    if (!checkPassword) return res.status(401).send("incorrect password");

    const token = await UserServices.createToken(req.body);
    res.cookie("access_token", token, { httpOnly: true });
    return res.status(200).send("login successful !!!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
};
