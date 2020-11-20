const request = require("supertest");
const server = require("../server");
const expect = require("chai").expect;

describe("API tests", () => {
  let api;

  before(() => {
    api = server.listen(5000, () =>
      console.log("\nTesting server is online\n")
    );
  });

  after((done) => {
    console.log("\nServer is offline\n");
    api.close(done);
  });

  //Tests:
  it("returns greeting at /", (done) => {
    request(api).get("/").expect(200, done);
  });

  it("responds to /journal", (done) => {
    request(api).get("/journal").expect(200, done);
  });

  
});
