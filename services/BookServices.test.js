const BookServices = require("./BookServices");
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
  it("create a new book", async () => {
    const book = await BookServices.createBook(mockBook);
    expect(book).toBeTruthy();
    expect(book.title).toBe(mockBook.title);
  });
});
