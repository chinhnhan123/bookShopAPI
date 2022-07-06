const BookRepositorys = require("./BookRepository");
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
  it("find all books", async () => {
    const books = await BookRepositorys.findAllBooks();
    expect(typeof books).toBe("object");
  });

  it("create a new book", async () => {
    const book = await BookRepositorys.createBook(mockBook);
    expect(book).toBeTruthy();
    expect(book.title).toBe(mockBook.title);
  });
});
