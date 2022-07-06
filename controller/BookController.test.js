const BookController = require("./BookController");
const DB = require("../database/connect");

beforeAll(async () => {
  await DB.connectDatabase();
});

afterAll(async () => {
  await DB.DisconnnectDB();
});

const mockBook = {
  title: "demo book1",
  price: 11111,
};

describe("book testing", () => {
  it("create a new book", async () => {});
});
