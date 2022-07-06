const UserRepositorys = require("./UserRepository");
const DB = require("../database/connect");

beforeAll(async () => {
  await DB.connectDatabase();
});

afterAll(async () => {
  await DB.DisconnnectDB();
});

const mockUser = {
  email: "Abc123@gmail.com",
  password: 123456,
};
const mockCreateUser = {
  email: "nhan11111@gmail.com",
  password: 123456,
};

describe("regiser testing", () => {
  it(" Find users", async () => {
    const user = await UserRepositorys.findUser(mockUser);
    expect(user).toBeTruthy();
    expect(user.email).toBe(mockUser.email);
  });

  it("create User", async () => {
    const user = await UserRepositorys.createUser(mockCreateUser);
    expect(user).toBeTruthy();
    expect(user.email).toBe(mockCreateUser.email);
  });
});

describe("login testing", () => {
  it(" check Password", async () => {
    const checkPassword = await UserRepositorys.checkPassword(mockUser);
    expect(checkPassword).toBeTruthy();
  });

  it("createToken", async () => {
    const user = await UserRepositorys.createToken(mockUser.email);
    expect(user).toBeTruthy();
  });
});
