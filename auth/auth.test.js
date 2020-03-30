const supertest = require("supertest")
const db = require("../database/dbConfig")
const server = require("../index")

beforeEach(async () => {
  await db.seed.run()    
})

test("sanity", () => {
    expect(2 + 2).toBe(4);
  });

  // Register
test("Register User", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({
        username: "Mini4",
        password: "stuff"
      });
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe("application/json");
    expect(res.body.username).toBe("Mini4");
  });

  test("Failure to Register", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.type).toBe("application/json");
  });

test("login User", async () => {
    const res = await supertest(server)
      .post("/auth/login")
      .send({
        username: "",
        password: "stuff"
      });
    expect(res.statusCode).toBe(401);
    expect(res.type).toBe("application/json");
    expect(res.body.message).toBe("Invalid Credentials.");
  });

  test("login User", async () => {
    const res = await supertest(server)
      .post("/auth/login")
      .send({
        username: "Mini2",
        password: ""
      });
    expect(res.statusCode).toBe(401);
    expect(res.type).toBe("application/json");
    expect(res.body.message).toBe("Invalid Credentials.");
  });

afterAll(async () => {
  await db.destroy()
})