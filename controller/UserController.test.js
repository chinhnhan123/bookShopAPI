const express = require("express");
const request = require("supertest");
const DB = require("../database/connect");
const app = require("../app");

beforeAll(async () => {
  await DB.connectDatabase();
});

afterAll(async () => {
  await DB.DisconnnectDB();
});

const mockUser = {
  email: "Abc1@gmail.com",
  password: "123456",
  role: "admin",
};

const payload = {
  email: "Abc1@gmail.com",
  role: "admin",
};

// describe("POST /auth/register", () => {
//   // it("return response status is 200", async () => {
//   //   const response = await request(app)
//   //     .post("/auth/register")
//   //     .send(mockUser)
//   //     .set("Accept", "application/json");
//   //   // expect(response.headers["Content-Type"]).toMatch(/json/);
//   //   expect(response.status).toEqual(200);
//   //   expect(response.body.email).toBe(mockUser.email);
//   // });

//   it("return response status is 400", async () => {
//     const response = await request(app)
//       .post("/auth/register")
//       .send(mockUser)
//       .set("Accept", "application/json");
//     expect(response.status).toEqual(400);
//     expect(response.text).toBe("User already exists");
//   });
// });
describe("POST /auth/login", () => {
  // it("return response status is 400 bc without email", async () => {
  //   const response = await request(app)
  //     .post("/auth/login")
  //     .send(mockUser)
  //     .set("Accept", "application/json");
  //   expect(response.status).toEqual(400);
  //   expect(response.text).toBe("empty email or password");
  // });
  // it("return response status is 400 bc not found user", async () => {
  //   const response = await request(app)
  //     .post("/auth/login")
  //     .send(mockUser)
  //     .set("Accept", "application/json");
  //   expect(response.status).toEqual(400);
  //   expect(response.text).toBe("User does not exists");
  // });
  // it("return response status is 400 bc invalid password", async () => {
  //   const response = await request(app)
  //     .post("/auth/login")
  //     .send(mockUser)
  //     .set("Accept", "application/json");
  //   expect(response.status).toEqual(401);
  //   expect(response.text).toBe("incorrect password");
  // });

  it("return response login status is 200", async () => {
    const response = await request(app)
      // const agent = request.agent(app)
      .post("/auth/login")
      .send(mockUser)
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.text).toBe("login successful !!!!!");
  });
});
