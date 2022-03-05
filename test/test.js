const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);

describe("GET /", () => {
  it("should respond with Yo! Wassup, Mate!", async (done) => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Yo! Wassup, Mate!");
    done;
  });
});
