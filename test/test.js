const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Yo! Wassup, Mate!", (done) => {
    request(app).get("/").expect("Yo! Wassup, Mate!", done);
  });
});
