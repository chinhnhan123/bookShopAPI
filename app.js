var path = require("path");
// console.log(require("dotenv").config());
// console.log(
//   require("dotenv").config({ path: path.resolve(__dirname, ".env") })
// );
// console.log(path.resolve(__dirname, ".env"));
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const database = require("./database/connect");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const booksRouter = require("./routes/api/book");
const authRouter = require("./routes/api/auth");

const { isLoggedIn } = require("./middlewares/AuthMiddleWare");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/books", booksRouter);
app.use("/auth", authRouter);

(async () => {
  await database.connectDatabase();
})();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/api/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
