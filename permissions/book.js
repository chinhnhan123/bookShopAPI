const { ADMIN_ROLE, USER_ROLE, SELLER_ROLE } = require("../constants/role");

const canDeleteBook = (req, res, next) => {
  if (req.role === ADMIN_ROLE || req.role === SELLER_ROLE) {
    console.log(
      "🚀 --------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: book.js ~ line 5 ~ canDeleteBook ~ ADMIN_ROLE",
      ADMIN_ROLE
    );
    console.log(
      "🚀 --------------------------------------------------------------------🚀"
    );
    next();
  }
  return res.sendStatus(403);
};

module.exports = {
  canDeleteBook,
};
